import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface favoriteReposState {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
}

export const useFavoriteReposStore = create(
  devtools<favoriteReposState>(() => ({
    favoriteReposIds: [],
    addFavoriteRepo: (id: number) => {},
    removeFavoriteRepo: (id: number) => {},
  }))
);
