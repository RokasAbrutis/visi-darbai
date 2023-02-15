const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");

let loader = new TwingLoaderFilesystem(__dirname + '/views');

module.exports = new TwingEnvironment(loader, {
  debug: true,
  cache: false,
  auto_reload: true,
});