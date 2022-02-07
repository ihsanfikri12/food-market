const dataFormat = (data) => {
  return data.map((value) => {
    return {
      id: value.id,
      image: value.image,
      title: value.title,
      price: Math.floor(value.pricePerServing / value.servings),
      gluten: value.glutenFreen,
      vegatarian: value.vegetarian,
      minutes: value.readyInMinutes,
      healthScore: value.healthScore,
    };
  });
};

export default dataFormat;
