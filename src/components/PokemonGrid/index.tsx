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
    <div
      className={`xs:grid-cols-3 grid-cols-2  xs:gap-x-10 gap-y-4 gap-x-3 ${
        pokemonIds.length > 2
          ? "grid"
          : "xs:flex grid  justify-center items-start"
      } `}
    >
      {pokemonIds.map((id) => (
        <Card key={id} pokemonId={id} isFavoritesGrid={isFavoritesGrid} />
      ))}
    </div>
  );
}
