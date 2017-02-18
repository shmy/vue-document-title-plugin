const { name } = require("./package.json");
// myLib => my-lib
// const toKebabCase = src => src.replace(/([A-Z]){1}|([0-9]){1}/g, $0 => "-" + $0.toLowerCase());
// my-lib => myLib
const toCamelCase  = src => src.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());
module.exports = {
  buble: {
    transforms: {
      generator: true,
      dangerousForOf: true
    }
  },
  format: ["cjs", "umd", "es"],
  moduleName: toCamelCase(name),
  compress: true
};