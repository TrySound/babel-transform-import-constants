import path from 'path';

const ImportDeclaration = (p, state) => {
  const importer = state.filename;
  const importee = p.node.source.value;
  const id = path.resolve(importer, importee);
  const values = state.opts.constants.find(item => item.path === id)
  console.log(p.node)
  if (values) {
  }
  // TODO check import type
  // TODO check named export existence
  // TODO remove import statement
};

const MemberExpression = (p, state) => {};

const Identifier = (p, state) => {};

const importConstants = () => {
  return {
    visitor: {
      ImportDeclaration,
      MemberExpression,
      Identifier,
    },
  };
};

module.exports = importConstants;
