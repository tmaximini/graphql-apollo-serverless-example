const transformArticle = item => {
  return {
    id: item.ID,
    name: item.Name,
    imageUrl: item.Images.Image.Link,
    brand: item.Producer,
    slug: item.Slug,
    price: item.Price,
    price_rrp: item.Price_rrp,
    description: Array.isArray(item.Translations)
      ? item.Translations[0]
      : item.Translations || "no description yet"
  };
};

module.exports = {
  transformArticle
};
