# is-one-thousand-nine-hundred-and-ninety-nine

[![npm version](https://img.shields.io/npm/v/is-one-thousand-nine-hundred-and-ninety-nine.svg)](https://www.npmjs.com/package/is-one-thousand-nine-hundred-and-ninety-nine)
[![jsr.io](https://img.shields.io/badge/jsr.io-is--one--thousand--nine--hundred--and--ninety--nine-blue)](https://jsr.io/packages/is-one-thousand-nine-hundred-and-ninety-nine)

## Description

This package provides a simple function to check if a given number is equal
to 1999. It is intended for educational purposes only and is not meant to be
used in serious or production applications. The primary goal is to demonstrate
how to create, test, and publish a TypeScript package using Deno and npm.

Don't miss to star the repository if you like it!

## Installation

You can install the package using npm:

```bash
npm install is-one-thousand-nine-hundred-and-ninety-nine
```

Or using pnpm:

```bash
pnpm add is-one-thousand-nine-hundred-and-ninety-nine
```

Or using Deno (hardly recommended):

```bash
deno add jsr:@horebz/is-one-thousand-nine-hundred-and-ninety-nine
```

```ts
import { isOneThousandNineHundredAndNinetyNine } from "is-one-thousand-nine-hundred-and-ninety-nine";
```

## Usage

Here's how you can use the function in your project:

```ts
import { isOneThousandNineHundredAndNinetyNine } from "is-one-thousand-nine-hundred-and-ninety-nine";

console.log(isOneThousandNineHundredAndNinetyNine(1999)); // true

console.log(isOneThousandNineHundredAndNinetyNine(2000)); // false

console.log(isOneThousandNineHundredAndNinetyNine("1999")); // false
```

## Tests

To run the tests, use the following command:

```bash
deno test
```

## Contributing

This package is not intended for serious use, but contributions are welcome.
Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for
details.

## Disclaimer

This package is for educational purposes only. It is not intended for use in
production or serious applications. Use at your own risk.
