'use strict';

const utils = require('@typescript-eslint/utils');
const MagicString = require('magic-string');
const node_path = require('node:path');
const synckit = require('synckit');
const dirs = require('./dirs.cjs');
require('node:url');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const MagicString__default = /*#__PURE__*/_interopDefaultCompat(MagicString);

const configsRecommended = {
  plugins: ["@unocss"],
  rules: {
    "@unocss/order": "warn",
    "@unocss/order-attributify": "warn"
  }
};

const syncAction = synckit.createSyncFn(node_path.join(dirs.distDir, "worker.cjs"));

const IGNORE_ATTRIBUTES = ["style", "class", "classname", "value"];
const orderAttributify = utils.ESLintUtils.RuleCreator((name) => name)({
  name: "order-attributify",
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "Order of UnoCSS attributes",
      recommended: "recommended"
    },
    messages: {
      "invalid-order": "UnoCSS attributes are not ordered"
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    const scriptVisitor = {};
    const templateBodyVisitor = {
      VStartTag(node) {
        const valueless = node.attributes.filter((i) => typeof i.key?.name === "string" && !IGNORE_ATTRIBUTES.includes(i.key?.name?.toLowerCase()) && i.value == null);
        if (!valueless.length)
          return;
        const input = valueless.map((i) => i.key.name).join(" ").trim();
        const sorted = syncAction("sort", input);
        if (sorted !== input) {
          context.report({
            node,
            messageId: "invalid-order",
            fix(fixer) {
              const codeFull = context.getSourceCode();
              const offset = node.range[0];
              const code = codeFull.getText().slice(node.range[0], node.range[1]);
              const s = new MagicString__default(code);
              const sortedNodes = valueless.map((i) => [i.range[0] - offset, i.range[1] - offset]).sort((a, b) => b[0] - a[0]);
              for (const [start, end] of sortedNodes.slice(1))
                s.remove(start, end);
              s.overwrite(sortedNodes[0][0], sortedNodes[0][1], ` ${sorted.trim()} `);
              return fixer.replaceText(node, s.toString());
            }
          });
        }
      }
    };
    if (context.parserServices == null || context.parserServices.defineTemplateBodyVisitor == null) {
      return scriptVisitor;
    } else {
      return context.parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
    }
  }
});

const CLASS_FIELDS = ["class", "classname"];
const AST_NODES_WITH_QUOTES = ["Literal", "VLiteral"];

const order = utils.ESLintUtils.RuleCreator((name) => name)({
  name: "order",
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "Order of UnoCSS utilities in class attribute",
      recommended: "recommended"
    },
    messages: {
      "invalid-order": "UnoCSS utilities are not ordered"
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    function checkLiteral(node) {
      if (typeof node.value !== "string" || !node.value.trim())
        return;
      const input = node.value;
      const sorted = syncAction("sort", input).trim();
      if (sorted !== input) {
        context.report({
          node,
          messageId: "invalid-order",
          fix(fixer) {
            if (AST_NODES_WITH_QUOTES.includes(node.type))
              return fixer.replaceTextRange([node.range[0] + 1, node.range[1] - 1], sorted);
            else
              return fixer.replaceText(node, sorted);
          }
        });
      }
    }
    const scriptVisitor = {
      JSXAttribute(node) {
        if (typeof node.name.name === "string" && CLASS_FIELDS.includes(node.name.name.toLowerCase()) && node.value) {
          if (node.value.type === "Literal")
            checkLiteral(node.value);
        }
      },
      SvelteAttribute(node) {
        if (node.key.name === "class") {
          if (node.value?.[0].type === "SvelteLiteral")
            checkLiteral(node.value[0]);
        }
      }
    };
    const templateBodyVisitor = {
      VAttribute(node) {
        if (node.key.name === "class") {
          if (node.value.type === "VLiteral")
            checkLiteral(node.value);
        }
      }
    };
    if (context.parserServices == null || context.parserServices.defineTemplateBodyVisitor == null) {
      return scriptVisitor;
    } else {
      return context.parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
    }
  }
});

const blocklist = utils.ESLintUtils.RuleCreator((name) => name)({
  name: "blocklist",
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Utilities in UnoCSS blocklist",
      recommended: "recommended"
    },
    messages: {
      "in-blocklist": "Utility '{{ name }}' is in blocklist"
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    const checkLiteral = (node) => {
      if (typeof node.value !== "string" || !node.value.trim())
        return;
      const input = node.value;
      const blocked = syncAction("blocklist", input, context.filename);
      blocked.forEach((i) => {
        context.report({
          node,
          messageId: "in-blocklist",
          data: {
            name: i
          }
        });
      });
    };
    const scriptVisitor = {
      JSXAttribute(node) {
        if (typeof node.name.name === "string" && CLASS_FIELDS.includes(node.name.name.toLowerCase()) && node.value) {
          if (node.value.type === "Literal")
            checkLiteral(node.value);
        }
      },
      SvelteAttribute(node) {
        if (node.key.name === "class") {
          if (node.value?.[0].type === "SvelteLiteral")
            checkLiteral(node.value[0]);
        }
      }
    };
    const templateBodyVisitor = {
      VAttribute(node) {
        if (node.key.name === "class") {
          if (node.value.type === "VLiteral")
            checkLiteral(node.value);
        }
      },
      // Attributify
      VStartTag(node) {
        const valueless = node.attributes.filter((i) => typeof i.key?.name === "string" && !IGNORE_ATTRIBUTES.includes(i.key?.name?.toLowerCase()) && i.value == null);
        if (!valueless.length)
          return;
        for (const node2 of valueless) {
          if (!node2?.key?.name)
            continue;
          const blocked = syncAction("blocklist", node2.key.name, context.filename);
          blocked.forEach((i) => {
            context.report({
              node: node2,
              messageId: "in-blocklist",
              data: {
                name: i
              }
            });
          });
        }
      }
    };
    if (context.parserServices == null || context.parserServices.defineTemplateBodyVisitor == null) {
      return scriptVisitor;
    } else {
      return context.parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
    }
  }
});

const plugin = {
  rules: {
    order,
    "order-attributify": orderAttributify,
    blocklist
  }
};

const configsFlat = {
  plugins: {
    unocss: plugin
  },
  rules: {
    "unocss/order": "warn",
    "unocss/order-attributify": "warn"
  }
};

const index = {
  ...plugin,
  configs: {
    recommended: configsRecommended,
    flat: configsFlat
  }
};

module.exports = index;
