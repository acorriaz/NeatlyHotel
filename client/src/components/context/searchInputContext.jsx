import { createContext, useState } from "react";

const SearchInputContext = createContext(null);

export default function SearchInputContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  );
}
