require("console-pretty-print");

const { getArticleBySlug } = require("./resolvers/article");

console.log("getting article");
const res = getArticleBySlug(
  "nike-dri-fit-shortsleeve-running-tee-shirt-f011"
).then(data => console.pretty(data));
