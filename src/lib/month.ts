export enum Month {
  Jan = 1,
  Fev,
  Mar,
  Abr,
  Maio,
  Jun,
  Jul,
  Ago,
  Set,
  Out,
  Nov,
  Dez,
}

export const renderMonth = (month: number) => {
  if (month < 1 || month > 12 || !month) {
    throw new Error('Mês Inválido')
  }

  return Month[month] || 'Mês Inválido'
}
