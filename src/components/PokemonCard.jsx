const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className="flex justify-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-2/4 object-contain"
        />
      </div>
      <h3 className="text-3xl font-bold uppercase">{pokemon.name}</h3>

      <div className="flex justify-center mt-2 space-x-2">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className="px-3 py-2 bg-gray-200 rounded-full text-sm capitalize"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
