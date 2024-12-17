import { useState } from 'react';

export default function useNavbarLogic() {
  const [isSearchVisible, SetIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    SetIsSearchVisible(!isSearchVisible);
  };

  const navigation = [
    {
      name: 'Inicio',
      href: '#',
    },
    {
      name: 'Tienda',
      href: '#',
    },
    {
      name: 'Contacto',
      href: '#',
    },
  ];

  const currencies = [
    {
      name: 'COP',
      symbol: '$',
      img: 'https://restcountries.com/data/col.svg',
    },
    {
      name: 'USD',
      symbol: 'US$',
      img: 'https://restcountries.com/data/usa.svg',
    },
  ];

  const search = async (query: string) => {
    if (!query.trim()) {
      return;
    }
    console.log(query);
  };

  return { isSearchVisible, toggleSearch, navigation, currencies, search };
}
