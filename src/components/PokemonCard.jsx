import { pokemonTypes } from "../helpers/pokemonTypes";

const PokemonCard = ({ pokemon, status }) => {
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  const formatPokemonNumber = (id) => {
    if(id >= 100) return id
    return id.toString().padStart(3, '0'); 
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center relative">
      <div className="absolute top-5 left-5 bg-gray-100 flex justify-center items-center text-5xl font-bold text-gray-500 opacity-30">
        #{formatPokemonNumber(pokemon.id)}{" "} 
      </div>
      <div className="flex justify-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-2/4 object-contain"
        />
      </div>
      <h3 className="text-3xl font-bold uppercase">{pokemon.name}</h3>

      <div className="flex justify-center mt-2 space-x-2">
        {pokemon.types.map((type, index) => {
          const typeColor = pokemonTypes[type.type.name] || "#A8A878";
          return (
            <span
              key={index}
              className="px-3 py-2 rounded-full text-sm capitalize"
              style={{
                backgroundColor: typeColor,
                color: "#fff",
              }}
            >
              {type.type.name}
            </span>
          );
        })}
      </div>

      <div className="flex justify-center mt-2 space-x-2">
        <span className="px-3 py-2 rounded-full text-sm capitalize bg-zinc-200">
          {pokemon.weight} KG
        </span>
        <span className="px-3 py-2 rounded-full text-sm capitalize bg-zinc-200">
          {pokemon.height} M
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;
