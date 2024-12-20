import { useState } from 'react'

interface SortProps {
  options: { value: string; label: string }[]
  onSortChange: (value: string) => void
}

export default function Sort({ options, onSortChange }: SortProps) {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedOption(value)
    onSortChange(value)
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 items-center'>
      <p className='text-gray-700 text-sm sm:text-base'>Ordenar por:</p>
      <select
        value={selectedOption}
        onChange={handleChange}
        className='border border-gray-300 rounded-md px-2 py-1 text-sm sm:text-base min-w-max'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
