import { UnoGenerator } from '@unocss/core';

declare function getGenerator(): Promise<UnoGenerator<any>>;
declare function run(action: 'sort', classes: string): string;
declare function run(action: 'blocklist', classes: string, id?: string): string[];

export { getGenerator, run };
