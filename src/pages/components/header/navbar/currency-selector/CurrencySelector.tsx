interface CurrencySelectorProps {
  currencies: {
    name: string
    symbol: string
    img: string
  }[]
}

export default function CurrencySelector({
  currencies,
}: CurrencySelectorProps) {
  return (
    <>
      <div className='hidden lg:ml-8 lg:flex'>
        <select
          className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          defaultValue={currencies[0].name}
        >
          {currencies.map((currency) => (
            <option key={currency.name} value={currency.name}>
              {currency.symbol} - {currency.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
