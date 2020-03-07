type PathType = string | Buffer | URL;

type OptionsType = { mode?: number };

export function readTextFileSync(path: PathType): string;

export function writeTextFileSync(path: PathType | number, data: string, options?: OptionsType): void;
export function appendTextFileSync(path: PathType, data: string, options?: OptionsType): void;
export function createTextFileSync(path: PathType, data: string, options?: OptionsType): void;

export function readTextFile(path: PathType): Promise<string>;

export function writeTextFile(path: PathType | number, data: string, options?: OptionsType): Promise<void>;
export function appendTextFile(path: PathType, data: string, options?: OptionsType): Promise<void>;
export function createTextFile(path: PathType, data: string, options?: OptionsType): Promise<void>;
