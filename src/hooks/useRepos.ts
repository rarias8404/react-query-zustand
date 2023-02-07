import { useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repository } from "./types";

const fetchRepos = async () => {
  const { data } = await api.get<Repository[]>("/users/rarias8404/repos");
  return data;
};

export const useFetchRepositories = () => {
  return useQuery(["repos"], fetchRepos);
};
