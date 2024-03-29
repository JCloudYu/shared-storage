interface StorageClear {(identifier:string|object, clear:true):void}
declare global {
	interface SStorageExt {(identifier:string):{[key:string|number|symbol]:any}}
	interface ExtendedSharedStorage extends SStorageExt {}
}

interface SharedStorage extends StorageClear, ExtendedSharedStorage {}
declare const storage:SharedStorage;
export = storage;
