export function PokemonsArea() {
  return (
    <main>
      <div className="container mx-auto h-screen px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 shadow-md p-4">
          <h1>Item1</h1>
          <h1>Item2</h1>
          <h1>Item3</h1>
          <h1>Item4</h1>
          <h1>Item5</h1>
          <h1>Item6</h1>
        </div>

        <div className="flex justify-center items-center mt-8">
          <button
            className="px-4 py-2 bg-stone-950 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Anterior
          </button>

          <span className="mx-4 text-lg font-medium">
          </span>

          <button
            className="px-4 py-2 bg-stone-950 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Siguiente
          </button>
        </div>
      </div>
    </main>
  );
}
