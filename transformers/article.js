const transformArticle = item => {
  return {
    id: item.ID,
    name: item.Name,
    imageUrl: item.Images.Image.Link,
    brand: item.Producer,
    slug: item.Slug,
    price: item.Price,
    price_rrp: item.Price_rrp,
    description: Array.isArray(item.Tranlations)
      ? item.Tranlations[0]
      : item.Tranlations || "no description yet"
  };
};

module.exports = {
  transformArticle
};
