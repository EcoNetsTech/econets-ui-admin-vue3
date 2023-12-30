"use strict";Object.defineProperty(exports, "__esModule", {value: true});var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/shared.ts
var toString = Object.prototype.toString;
function is(value, type) {
  return toString.call(value) === `[object ${type}]`;
}
function isNull(value) {
  return value === void 0 || value === null;
}
function isString(value) {
  return typeof value === "string";
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return is(value, "Object");
}

// src/node.ts
var XmlNodeType;
(function(XmlNodeType2) {
  XmlNodeType2["Root"] = "Root";
  XmlNodeType2["Declaration"] = "Declaration";
  XmlNodeType2["Comment"] = "Comment";
  XmlNodeType2["DocumentType"] = "DocumentType";
  XmlNodeType2["Element"] = "Element";
  XmlNodeType2["Text"] = "Text";
  XmlNodeType2["Instruction"] = "Instruction";
  XmlNodeType2["CDATA"] = "CDATA";
})(XmlNodeType || (XmlNodeType = exports.XmlNodeType = {}));
var XmlNode = class {
  constructor(type, parent = null, value = null) {
    __publicField(this, "name");
    __publicField(this, "type");
    __publicField(this, "parent");
    __publicField(this, "children");
    __publicField(this, "attributes");
    __publicField(this, "value");
    __publicField(this, "selfClosing");
    __publicField(this, "prefix");
    this.name = "";
    this.type = type;
    this.parent = parent;
    this.value = value;
    this.children = null;
    this.attributes = {};
    this.selfClosing = false;
    this.prefix = "";
  }
  setName(value) {
    this.name = value;
    return this;
  }
  setType(value) {
    this.type = value;
    return this;
  }
  setParent(value) {
    this.parent = value;
    return this;
  }
  setChildren(value) {
    this.children = value ? Array.from(value) : value;
    return this;
  }
  setAttributes(value) {
    this.attributes = __spreadValues({}, value);
    return this;
  }
  setValue(value) {
    this.value = value;
    return this;
  }
  setSelfClosing(value) {
    this.selfClosing = value;
    return this;
  }
  setPrefix(value) {
    this.prefix = value;
    return this;
  }
  addAttribute(name, value) {
    this.attributes[name] = value;
    return this;
  }
  removeAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  addChild(childNode) {
    if (childNode === this)
      return this;
    if (!this.children) {
      this.children = [];
    }
    this.children.push(childNode);
    if (childNode.parent !== this) {
      childNode.parent = this;
    }
    return this;
  }
  removeChild(childNode) {
    if (this.children && this.children.length) {
      const index = this.children.findIndex((node) => node === childNode);
      if (~index) {
        this.children.splice(index, 1);
        childNode.parent = null;
      }
    }
    return this;
  }
  toJsObject() {
    return {
      name: this.name || void 0,
      prefix: this.prefix || void 0,
      type: this.type,
      attributes: Object.keys(this.attributes).length ? this.attributes : void 0,
      value: isNull(this.value) ? void 0 : this.value,
      selfClosing: this.selfClosing || void 0,
      children: (this.type === XmlNodeType.Element || this.type === XmlNodeType.Root) && this.children && this.children.length ? this.children.map((child) => child.toJSON()) : void 0
    };
  }
  toXmlString(indentChar = "  ", newLine = "\n", indentCount = 0) {
    const indent = indentChar.repeat(indentCount);
    let xml = "";
    switch (this.type) {
      case XmlNodeType.Root: {
        xml += this.children && this.children.length ? this.children.map((node) => node.toXmlString(indentChar, newLine, indentCount)).join(newLine) : "";
        break;
      }
      case XmlNodeType.Element: {
        if (!this.name)
          return "";
        const name = this.prefix ? `${this.prefix}:${this.name}` : this.name;
        xml += `${indent}<${name}`;
        const attributes = buildAttributeString(this.attributes || {});
        if (attributes) {
          xml += ` ${attributes}`;
        }
        if (this.children && this.children.length) {
          xml += `>${newLine}${this.children.map((node) => node.toXmlString(indentChar, newLine, indentCount + 1)).join(newLine)}${newLine}${indent}</${name}>`;
        } else {
          xml += this.selfClosing ? " />" : `></${name}>`;
        }
        break;
      }
      case XmlNodeType.CDATA: {
        xml += `${indent}<![CDATA[${isNull(this.value) ? "" : this.value}]]>`;
        break;
      }
      case XmlNodeType.Text: {
        xml += isNull(this.value) ? "" : `${indent}${this.value}`;
        break;
      }
      case XmlNodeType.DocumentType: {
        xml += isNull(this.value) ? "" : `${indent}<!DOCTYPE ${this.value}>`;
        break;
      }
      case XmlNodeType.Comment: {
        xml += `${indent}<!-- ${isNull(this.value) ? "" : this.value + " "}-->`;
        break;
      }
      case XmlNodeType.Declaration: {
        xml += `${indent}<?xml `;
        if (!this.attributes || isNull(this.attributes.version)) {
          xml += 'version="1.0" ';
        } else {
          const version = parseFloat(this.attributes.version);
          xml += `version="${Number.isNaN(version) ? "1.0" : version.toFixed(1)}" `;
        }
        if (this.attributes) {
          const _a = this.attributes, { version } = _a, attributes = __objRest(_a, ["version"]);
          if (attributes) {
            xml += buildAttributeString(attributes);
          }
        }
        xml += "?>";
        break;
      }
      case XmlNodeType.Instruction: {
        xml += isNull(this.value) ? "" : `${indent}<?${this.value}?>`;
        break;
      }
    }
    return xml;
  }
  toJSON() {
    return this.toJsObject();
  }
  toString() {
    return this.toXmlString("", "");
  }
};
function buildAttributeString(attributes) {
  return Object.keys(attributes).map((key) => {
    const value = attributes[key];
    if (isNull(value)) {
      return null;
    }
    if (isBoolean(value)) {
      return value ? key : null;
    }
    return `${key}="${value}"`;
  }).filter(Boolean).join(" ");
}

// src/props.ts
var defaultProcessor = (v) => v;
var defaultParseProps = {
  ignoreAttributes: false,
  parseNodeValue: true,
  trimValues: true,
  prefixInName: false,
  valueProcessor: defaultProcessor,
  attributeProcessor: defaultProcessor
};
var defaultBuildProps = {
  nameKey: "name",
  typeKey: "type",
  valueKey: "value",
  attributesKey: "attributes",
  childrenKey: "children",
  selfClosingKey: "selfClosing",
  prefixKey: "prefix",
  trimValues: true,
  isRoot: false,
  prefixInName: false,
  valueProcessor: defaultProcessor,
  attributeProcessor: defaultProcessor
};
var parsePropKeys = Object.keys(defaultParseProps);
function normalizeParseProps(props = {}) {
  const normalizedProps = __spreadValues({}, props);
  parsePropKeys.forEach((key) => {
    if (isNull(normalizedProps[key])) {
      normalizedProps[key] = defaultParseProps[key];
    }
  });
  return normalizedProps;
}
var buildPropKeys = Object.keys(defaultBuildProps);
function normalizeBuildProps(props = {}) {
  const normalizedProps = __spreadValues({}, props);
  buildPropKeys.forEach((key) => {
    if (isNull(normalizedProps[key])) {
      normalizedProps[key] = defaultBuildProps[key];
    }
  });
  return normalizedProps;
}

// src/parser.ts
var tagNotClosed = "Tag is not closed.";
function parseXmlString(xmlString, props = {}) {
  const normalizedXml = xmlString.replace(/\r\n?/g, "\n");
  const normalizedProps = normalizeParseProps(props);
  const xmlLength = normalizedXml.length;
  const rootXmlNode = new XmlNode(XmlNodeType.Root);
  let currentNode = rootXmlNode;
  let textData = "";
  for (let i = 0; i < xmlLength; i++) {
    const char = normalizedXml[i];
    if (char !== "<") {
      textData += char;
    } else {
      if (normalizedXml[i + 1] === "/") {
        const endIndex = findEndIndexOrThrow(normalizedXml, ">", i, `Element End ${tagNotClosed}`);
        let tagName = normalizedXml.substring(i + 2, endIndex);
        let prefix = "";
        if (!normalizedProps.prefixInName) {
          const prefixIndex = tagName.indexOf(":");
          if (~prefixIndex) {
            prefix = tagName.substring(0, prefixIndex);
            tagName = tagName.substring(prefixIndex + 1);
          }
        }
        if (currentNode.prefix !== prefix || currentNode.name !== tagName) {
          throw new Error(`End Tag is incorrect.`);
        }
        if (textData) {
          const textValue = toTextValue(processNodeValue("", XmlNodeType.Text, textData, normalizedProps));
          if (textValue) {
            currentNode.addChild(new XmlNode(XmlNodeType.Text, currentNode, textValue));
          }
        }
        currentNode = currentNode.parent;
        textData = "";
        i = endIndex;
      } else if (normalizedXml[i + 1] === "?") {
        const endIndex = findEndIndexOrThrow(normalizedXml, "?>", i, `Processing Instruction ${tagNotClosed}`);
        const content = normalizedXml.substring(i + 2, endIndex - 1);
        if (currentNode) {
          if (content.startsWith("xml ") && content.includes("version=") && currentNode.type === XmlNodeType.Root) {
            const childNode = new XmlNode(XmlNodeType.Declaration, currentNode);
            childNode.attributes = parseAttributes(content.substr(4), XmlNodeType.Declaration, normalizedProps);
            currentNode.addChild(childNode);
          } else {
            currentNode.addChild(new XmlNode(XmlNodeType.Instruction, currentNode, processNodeValue("", XmlNodeType.Instruction, content, normalizedProps)));
          }
        }
        i = endIndex;
      } else if (normalizedXml.substr(i + 1, 3) === "!--") {
        const endIndex = findEndIndexOrThrow(normalizedXml, "-->", i, `Comment ${tagNotClosed}`);
        const content = normalizedXml.substring(i + 4, endIndex - 2);
        if (currentNode) {
          currentNode.addChild(new XmlNode(XmlNodeType.Comment, currentNode, processNodeValue("", XmlNodeType.Comment, content, normalizedProps)));
        }
        i = endIndex;
      } else if (normalizedXml.substr(i + 1, 8) === "!DOCTYPE") {
        let endIndex = findEndIndexOrThrow(normalizedXml, ">", i, `Document Type ${tagNotClosed}`);
        let content = normalizedXml.substring(i + 9, endIndex);
        if (content.includes("[")) {
          endIndex = findEndIndexOrThrow(normalizedXml, "]>", i, `Document Type ${tagNotClosed}`);
          content = normalizedXml.substring(i + 9, endIndex);
        }
        if (currentNode) {
          currentNode.addChild(new XmlNode(XmlNodeType.DocumentType, currentNode, processNodeValue("", XmlNodeType.DocumentType, content, normalizedProps)));
        }
        i = endIndex;
      } else if (normalizedXml.substr(i + 1, 8) === "![CDATA[") {
        const endIndex = findEndIndexOrThrow(normalizedXml, "]]>", i, `CDATA Section ${tagNotClosed}`);
        const content = normalizedXml.substring(i + 9, endIndex - 2);
        if (currentNode && textData) {
          const textValue = toTextValue(processNodeValue("", XmlNodeType.Text, textData, normalizedProps));
          if (textValue) {
            currentNode.addChild(new XmlNode(XmlNodeType.Text, currentNode, textValue));
          }
        }
        currentNode.addChild(new XmlNode(XmlNodeType.CDATA, currentNode, processNodeValue("", XmlNodeType.CDATA, content, normalizedProps)));
        textData = "";
        i = endIndex;
      } else {
        let attrBoundary = "";
        let content = "";
        let endIndex = i + 1;
        while (endIndex <= xmlLength) {
          let char2 = normalizedXml[endIndex];
          if (attrBoundary) {
            if (char2 === attrBoundary)
              attrBoundary = "";
          } else if (char2 === '"' || char2 === "'") {
            attrBoundary = char2;
          } else if (char2 === "	") {
            char2 = " ";
          } else if (char2 === ">") {
            break;
          }
          content += char2;
          endIndex++;
        }
        if (endIndex > xmlLength) {
          throw new Error(`Element ${tagNotClosed}`);
        }
        content = content.trim();
        const separatorIndex = content.indexOf(" ");
        let tagName = content;
        let prefix = "";
        if (~separatorIndex) {
          tagName = content.substr(0, separatorIndex);
          content = content.substr(separatorIndex + 1);
        } else {
          content = "";
        }
        if (!normalizedProps.prefixInName) {
          const prefixIndex = tagName.indexOf(":");
          if (~prefixIndex) {
            prefix = tagName.substring(0, prefixIndex);
            tagName = tagName.substring(prefixIndex + 1);
          }
        }
        if (currentNode && textData) {
          const textValue = toTextValue(processNodeValue("", XmlNodeType.Text, textData, normalizedProps));
          if (textValue) {
            currentNode.addChild(new XmlNode(XmlNodeType.Text, currentNode, textValue));
          }
        }
        if (content.length && content.lastIndexOf("/") === content.length - 1) {
          if (tagName[tagName.length - 1] === "/") {
            tagName = tagName.substr(0, tagName.length - 1);
            content = "";
          } else {
            content = content.substr(0, content.length - 1);
          }
          const childNode = new XmlNode(XmlNodeType.Element, currentNode);
          childNode.name = tagName;
          childNode.selfClosing = true;
          childNode.prefix = prefix;
          if (content && !normalizedProps.ignoreAttributes) {
            childNode.attributes = parseAttributes(content, XmlNodeType.Element, normalizedProps);
          }
          currentNode.addChild(childNode);
        } else {
          const childNode = new XmlNode(XmlNodeType.Element, currentNode);
          if (content && !normalizedProps.ignoreAttributes) {
            childNode.attributes = parseAttributes(content, XmlNodeType.Element, normalizedProps);
          }
          childNode.name = tagName;
          childNode.prefix = prefix;
          currentNode.addChild(childNode);
          currentNode = childNode;
        }
        textData = "";
        i = endIndex;
      }
    }
  }
  return rootXmlNode;
}
function findEndIndexOrThrow(value, search, position, error) {
  const index = value.indexOf(search, position);
  if (!~index) {
    throw new Error(error);
  }
  return index + search.length - 1;
}
function processNodeValue(name, type, value, props) {
  if (value) {
    if (props.trimValues) {
      value = value.trim();
    }
    return parseValue(props.valueProcessor(value, type, name), props.parseNodeValue);
  }
  return null;
}
function parseValue(value, shouldParse) {
  if (shouldParse && isString(value)) {
    value = value.trim();
    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    } else {
      return tryToNumber(value);
    }
  } else {
    return isNull(value) ? null : value;
  }
}
function tryToNumber(value) {
  const number = parseFloat(value);
  return Number.isNaN(number) ? value : number;
}
function toTextValue(value) {
  return isNull(value) ? "" : isString(value) ? value : String(value);
}
var attributeRE = /[^\s=]+\s*(=\s*['"][\s\S]*?['"])?/g;
function parseAttributes(content, type, props) {
  content = content.replace(/\r?\n/g, " ");
  const matches = content.match(attributeRE) || [];
  const attributes = {};
  for (let i = 0; i < matches.length; i++) {
    const attrString = matches[i];
    let [name, value] = attrString.split("=");
    name = name.trim();
    if (isString(value)) {
      value = value.substring(1, value.length - 1);
      if (props.trimValues) {
        value = value.trim();
      }
      attributes[name] = parseValue(props.attributeProcessor(value, name, type), props.parseNodeValue);
    } else {
      attributes[name] = true;
    }
  }
  return attributes;
}

// src/builder.ts
function buildFromJson(json, props = {}) {
  const normalizedProps = normalizeBuildProps(props);
  const { nameKey, typeKey, valueKey, attributesKey, childrenKey, selfClosingKey, prefixKey } = normalizedProps;
  const rootXmlNode = new XmlNode(XmlNodeType.Root);
  const loopQueue = [];
  if (normalizedProps.isRoot || json[typeKey] === XmlNodeType.Root) {
    loopQueue.push(...(json[childrenKey] || []).map((child) => ({ parent: rootXmlNode, child })));
  } else {
    const declarationNdoe = new XmlNode(XmlNodeType.Declaration, rootXmlNode);
    declarationNdoe.attributes = {
      version: 1,
      encoding: "UTF-8",
      standalone: "yes"
    };
    rootXmlNode.addChild(declarationNdoe);
    loopQueue.push({ parent: rootXmlNode, child: json });
  }
  while (loopQueue.length) {
    const { parent, child } = loopQueue.shift();
    if (isString(child)) {
      parent.addChild(new XmlNode(XmlNodeType.Text, parent, processNodeValue2(XmlNodeType.Text, child, "", normalizedProps)));
      continue;
    }
    const name = isString(child[nameKey]) ? child[nameKey] : "";
    const type = child[typeKey];
    const value = isNull(child[valueKey]) ? null : child[valueKey];
    switch (type) {
      case XmlNodeType.CDATA: {
        parent.addChild(new XmlNode(XmlNodeType.CDATA, parent, processNodeValue2(type, value, "", normalizedProps)));
        break;
      }
      case XmlNodeType.Text: {
        parent.addChild(new XmlNode(XmlNodeType.Text, parent, processNodeValue2(type, value, "", normalizedProps)));
        break;
      }
      case XmlNodeType.DocumentType: {
        parent.addChild(new XmlNode(XmlNodeType.DocumentType, parent, processNodeValue2(type, value, "", normalizedProps)));
        break;
      }
      case XmlNodeType.Comment: {
        parent.addChild(new XmlNode(XmlNodeType.Comment, parent, processNodeValue2(type, value, "", normalizedProps)));
        break;
      }
      case XmlNodeType.Declaration: {
        const node = new XmlNode(XmlNodeType.Declaration, parent);
        const attributes = attributesKey && child[attributesKey];
        if (attributes && isObject(attributes)) {
          Object.keys(attributes).forEach((key) => {
            node.attributes[key] = normalizedProps.attributeProcessor(attributes[key], key, XmlNodeType.Declaration);
          });
        }
        if (!node.attributes.version) {
          node.attributes.version = 1;
        } else {
          const version = parseFloat(node.attributes.version);
          node.attributes.version = Number.isNaN(version) ? 1 : version;
        }
        parent.addChild(node);
        break;
      }
      case XmlNodeType.Instruction: {
        parent.addChild(new XmlNode(XmlNodeType.Instruction, parent, processNodeValue2(type, value, "", normalizedProps)));
        break;
      }
      default: {
        if (!name)
          break;
        let tagName = name;
        let prefix = "";
        if (normalizedProps.prefixInName) {
          const prefixIndex = tagName.indexOf(":");
          if (~prefixIndex) {
            prefix = tagName.substring(0, prefixIndex);
            tagName = tagName.substring(prefixIndex + 1);
          }
        } else if (prefixKey && isString(child[prefixKey])) {
          prefix = child[prefixKey];
        }
        const node = new XmlNode(XmlNodeType.Element, parent);
        const attributes = attributesKey && child[attributesKey];
        node.name = tagName;
        node.prefix = prefix;
        if (attributes && isObject(attributes)) {
          Object.keys(attributes).forEach((key) => {
            node.attributes[key] = normalizedProps.attributeProcessor(attributes[key], key, XmlNodeType.Element);
          });
        }
        parent.addChild(node);
        const children = child[childrenKey];
        if (isArray(children) && children.length) {
          node.selfClosing = false;
          loopQueue.push(...children.map((child2) => ({ parent: node, child: child2 })));
        } else {
          node.selfClosing = Boolean(selfClosingKey && child[selfClosingKey]);
        }
      }
    }
  }
  return rootXmlNode;
}
function processNodeValue2(type, value, name, props) {
  value = props.valueProcessor(value, type, name);
  if (isNull(value)) {
    return null;
  }
  if (isString(value)) {
    return props.trimValues ? value.trim() : value;
  }
  return String(value);
}





exports.XmlNode = XmlNode; exports.XmlNodeType = XmlNodeType; exports.buildFromJson = buildFromJson; exports.parseXmlString = parseXmlString;
