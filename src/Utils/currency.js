
export const currency = (currency)=>  {
 switch (currency) {
  case 'CNY':
  return "¥"
  case 'EUR':
    return "€"
  case 'USD':
    return '$'
  default:
}
return currency
}
