import { useEffect, useRef, useState } from "react";
import { usePokemonStore } from "../hooks/usePokemonStore";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { startGetAllPokemonNames, allPokemonNames } = usePokemonStore();  
  const suggestionsRef = useRef(null);

  useEffect(() => {
    startGetAllPokemonNames();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    setSuggestions(
      allPokemonNames.filter((p) => p.name.includes(value)).slice(0, 5)
    );
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  return (
    <>
      <form className="flex justify-center md:p-0 p-4 search-container">
        <div className="relative w-3xl">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Buscar un Pokémon..."
            className="px-4 py-2 rounded-md shadow-md border border-gray-300 w-full"
            maxLength={30}
          />

          <button
            type="submit"
            className="bg-stone-950 text-white px-4 py-2 rounded-md hover:bg-stone-800 transition-colors absolute right-0 top-0 bottom-0"
          >
            Buscar
          </button>

          {suggestions.length > 0 && (
            <ul
              ref={suggestionsRef}
              className="absolute left-0 top-full bg-white border rounded-md mt-1 w-full shadow-lg z-50"
            >
              {suggestions.map((p) => (
                <li
                  key={p.name}
                  onClick={() => handleSuggestionClick(p.name)}
                  className="p-2 cursor-pointer hover:bg-gray-200 text-md"
                >
                  {p.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </>
  );
}
