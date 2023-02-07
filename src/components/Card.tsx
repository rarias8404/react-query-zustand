import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteStores";

type CardPros = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardPros) => {
  // const { addFavoriteRepo } = useFavoriteReposStore();
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

  return (
    <div>
      <h1>{repository.name}</h1>
      <button>{isFavorite ? "Dislike" : "Like"}</button>
    </div>
  );
};

export default Card;
