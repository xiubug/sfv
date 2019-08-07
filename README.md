# sfv
Safe deep property access. x = sfv(obj, 'a.b.x') 

### Installation

```bash
# For npm
$ npm install sfv --save

# For yarn
$ yarn add sfv --save
```


### Usage

`sfv(object, keypath, [default])`

```js
import sfv from 'sfv';

let obj = {
	a: {
		b: {
			c: 1,
			d: undefined,
			e: null
		}
	}
};

// use string dot notation for keys
sfv(obj, 'a.b.c') === 1;

// or use an array key
sfv(obj, ['a', 'b', 'c']) === 1;

sfv(obj, 'a.b') === obj.a.b;

// returns undefined if the full key path does not exist and no default is specified
sfv(obj, 'a.b.f') === undefined;

// optional third parameter for default if the full key in path is missing
sfv(obj, 'a.b.f', 'foo') === 'foo';

// or if the key exists but the value is undefined
sfv(obj, 'a.b.d', 'foo') === 'foo';

// Non-truthy defined values are still returned if they exist at the full keypath
sfv(obj, 'a.b.e', 'foo') === null;

// undefined obj or key returns undefined, unless a default is supplied
sfv(undefined, 'a.b.c') === undefined;
sfv(undefined, 'a.b.c', 'foo') === 'foo';
sfv(obj, undefined, 'foo') === 'foo';
```


### License

MIT
