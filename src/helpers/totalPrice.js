export default (price) =>
  new Intl.NumberFormat("us", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  }).format(price);
