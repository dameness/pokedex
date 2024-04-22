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
    <div className="grid grid-cols-3 xs:gap-x-10 gap-y-4 gap-x-3">
      {pokemonIds.map((id) => (
        <Card key={id} pokemonId={id} isFavoritesGrid={isFavoritesGrid} />
      ))}
    </div>
  );
}
