export function numberFormattedToCoin(num: number) {
  const transformToCoin = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(num)

  return transformToCoin
}
