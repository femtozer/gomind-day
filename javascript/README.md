# Unit testing in js/ts with jest

Install dependencies:

```bash
npm i
```

Create a new test file in tests folder for each src example:

```
src/a-hello-world.ts
=> tests/a-hello-world.test.ts
```

Inside the test file, write your unit tests like this:

```javascript
import { hello } from '../src/a-hello-world';

describe('hello', () => {
  test('should return without error', () => {
    expect(hello('Dave')).toBeDefined();
  });
});
```

Run tests with coverage:

```bash
npm run test
```

Jest documentation is [here](https://jestjs.io/fr/), good luck!
