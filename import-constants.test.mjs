import path from "path";
// import { test } from "uvu";
// import * as assert from "uvu/assert";
import babel from "@babel/core";
import importConstants from "./import-constants.js";

/*
const transform = (code, options) => {
  const result = babel.transformSync(code, {
    filename: path.resolve("./import-constants.test.js"),
    plugins: [[importConstants, options]],
  });
  return result.code;
};

test.only("inline string constants from default import", () => {
  const input = `import constants from './fixtures/default-exports.mjs';console.log(constants.name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/default-exports.mjs"),
        exports: "default",
        values: {
          name: "value",
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("inline number constants from namespace import", () => {
  const input = `import * as constants from './fixtures/named-exports.mjs';console.log(constants.name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/named-exports.mjs"),
        exports: "named",
        values: {
          name: 10000,
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("inline boolean constants from named import", () => {
  const input = `import { name } from './fixtures/named-exports.mjs';console.log(name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/named-exports.mjs"),
        exports: "named",
        values: {
          name: false,
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("inline null constants from named import", () => {
  const input = `import { name } from './fixtures/named-exports.mjs';console.log(name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/named-exports.mjs"),
        exports: "named",
        values: {
          name: null,
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("fails on missing value", () => {
  const input = `import { name } from './fixtures/named-exports.mjs';console.log(name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/named-exports.mjs"),
        exports: "named",
        values: {},
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("fails on complex value", () => {
  const input = `import { name } from './fixtures/named-exports.mjs';console.log(name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/named-exports.mjs"),
        exports: "named",
        values: {
          name: {},
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("fails on invalid exports usage", () => {
  const input = `import { name } from './fixtures/default-exports.mjs';console.log(name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/default-exports.mjs"),
        exports: "default",
        values: {
          name: "value",
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test("ignores non-constants imports", () => {
  const input = `import { name } from './fixtures/named-exports.mjs';console.log(name);`;
  const actual = transform(input, {
    constants: [
      {
        path: path.resolve("./fixtures/default-exports.mjs"),
        exports: "default",
        values: {
          name: "value",
        },
      },
    ],
  });
  const expected = ``;
  assert.equal(actual, expected);
});

test.run();
*/
