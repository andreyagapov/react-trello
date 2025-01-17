module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/react"
  ];
  const plugins = [
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-runtime",
    ["module-resolver", {
      alias: { "rt": "./src/" }
    }]
  ];

  return {
    presets,
    plugins
  };
}
