const transformArticle = item => {
  return {
    id: item.ID,
    name: item.Name,
    imageUrl: item.Images.Image.Link,
    brand: item.Producer,
    slug: item.Slug,
    price: item.Price,
    price_rrp: item.Price_rrp,
    descriptionLong: Array.isArray(item.Translations)
      ? item.Translations[0].DescriptionLong
      : item.Translations.DescriptionLong || "no description yet",
    descriptionShort: Array.isArray(item.Translations)
      ? item.Translations[0].DescriptionShort
      : item.Translations.DescriptionShort || "no description yet"
  };
};

module.exports = {
  transformArticle
};
