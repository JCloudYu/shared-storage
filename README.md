# Dummy Shared Storage #
This module is intended to provide a typescript friendly shared storage on which developers can extend the storage easily via `ExtendedSharedStorage` interface.

# Usage #
Simply install it via npm and require it directly.
```bash
npm install git@github.com:JCloudYu/share-storage.git
```

```javascript
const storage = require('shared-storage');
```

# Extension #
If you want to provide additional type information on the storage, simply declare a `ExtendedSharedStorage` interface and add types you want. For example...

```typescript
// in ext.d.ts
declare global {
	interface ExtendedSharedStorage {
		version?:string;
		code?:number;
	}

	interface ExtendedSharedStorage {
		(identifier:'demo'): { message:string; };
		(identifier:Object): { content:string; };
	}
};
```

And you can refer to the `version` and `code` properties directly in your code!
```typescript
// Direct access on shared object
const storage = require('shared-storage');
const code_num = storage.code;
storage.version = '0.1.0';

// Scopped contents
storage('demo').message = 'message';

// Volatile contents that are bound to an object
const obj1 = {};
storage(obj1).content = '123';

const obj2 = {};
storage(obj2).content = '456';


console.log( storage(obj1).content );  // will output 123
console.log( storage(obj2).content );  // will output 456
```