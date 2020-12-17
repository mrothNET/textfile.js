export function readTextFileSync(path: string): string;
export function writeTextFileSync(path: string, data: string, options?: { mode?: number }): void;
export function appendTextFileSync(path: string, data: string, options?: { mode?: number }): void;
export function createTextFileSync(path: string, data: string, options?: { mode?: number }): void;
export function editTextFileSync(path: string, editor: (text: string) => string): void;

export function readTextFile(path: string): Promise<string>;
export function writeTextFile(path: string, data: string, options?: { mode?: number }): Promise<void>;
export function appendTextFile(path: string, data: string, options?: { mode?: number }): Promise<void>;
export function createTextFile(path: string, data: string, options?: { mode?: number }): Promise<void>;
export function editTextFile(path: string, editor: (text: string) => Promise<string> | string): Promise<void>;
