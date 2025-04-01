export function SearchBar() {
  return (
    <form className="flex justify-center mb-12">
      <input
        type="text"
        placeholder="Buscar un Pokémon..."
        className="px-4 py-2 rounded-md shadow-md border border-gray-300 w-3xl"
        maxLength={30}
      />
      <button
        type="submit"
        className="bg-stone-950 text-white px-4 py-2 rounded-md hover:bg-stone-800 transition-colors"
      >
        Buscar
      </button>
    </form>
  )
}