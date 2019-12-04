require("isomorphic-fetch");
require("console-pretty-print");
// fetch("https://7nilhhyhq2.execute-api.us-east-1.amazonaws.com/dev/graphql", {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     query: `product(id: "abc") { name }`
//   })
// })
//   .then(res => {
//     console.log({ res });
//     res.json();
//   })
//   .then(res => console.log(res.data));

const { getArticleBySlug } = require("./resolvers/article");

console.log("getting article");
const res = getArticleBySlug(
  "nike-dri-fit-shortsleeve-running-tee-shirt-f011"
).then(data => console.pretty(data));
