import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteStores";

type CardPros = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardPros) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default Card;
