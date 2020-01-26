type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

type PathType = string | Buffer | URL | number;
type DataType = string | Buffer | TypedArray | DataView;

type WriteOptionsType = { flag?: string, mode?: number };

type ReadCallbackType = (error: Error | null, data: string | null) => void;
type WriteCallbackType = (error: Error | null) => void;

export function readTextFileSync(path: PathType): string;
export function writeTextFileSync(path: PathType, data: DataType, options?: WriteOptionsType): void;

export function readTextFile(path: PathType, callback: ReadCallbackType): void;
export function readTextFile(path: PathType): Promise<string>;

export function writeTextFile(path: PathType, data: DataType, options: WriteOptionsType, callback: WriteCallbackType): void;
export function writeTextFile(path: PathType, data: DataType, callback: WriteCallbackType): void;
export function writeTextFile(path: PathType, data: DataType, options?: WriteOptionsType): Promise<void>;
