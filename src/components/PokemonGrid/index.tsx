import Card from "../Card";

interface Props {
  pokemonIds?: number[];
  isFavoritesGrid: boolean;
}

export default function PokemonGrid({ pokemonIds, isFavoritesGrid }: Props) {
  if (!pokemonIds) {
    return <></>;
  }
  return (
    <div className="flex flex-col justify-center items-center xs:text-base text-xs">
      <div
        className={`grid xs:grid-cols-3 grid-cols-2  xs:gap-x-10 gap-y-4 gap-x-3 
        ${pokemonIds.length === 2 && `xs:grid-cols-2`}
        ${pokemonIds.length === 1 && `xs:grid-cols-1`} `}
      >
        {pokemonIds.map((id) => (
          <Card key={id} pokemonId={id} isFavoritesGrid={isFavoritesGrid} />
        ))}
      </div>
    </div>
  );
}
