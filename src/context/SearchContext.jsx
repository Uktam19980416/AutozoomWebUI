import {createContext, useContext, useState, useEffect} from 'react'

const SearchContext = createContext(undefined)

function SearchContextProvider({children}) {
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api';
  const base_URL2 = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/';
  const [datas, setDatas] = useState([]);

  const getFetch = async (url) => {
    const response = await fetch(url, { method: 'GET' });
    return await response.json();
  };

  useEffect(() => {
    getFetch(`${base_URL}/cars`).then((data) => {
      setDatas(data?.data);
      console.log(data?.data)
    });
  }, []);

  const value = {
    datas,
    base_URL,
    base_URL2
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a MyContextProvider')
  }
  return context
}

export {SearchContextProvider, useSearchContext}
