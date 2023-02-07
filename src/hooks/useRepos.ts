import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repository } from "./types";

const fetchRepos = async (githubUser: string) => {
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
};

export const useFetchRepositories = (githubUser: string) => {
  return useQuery(["repos", githubUser], () => fetchRepos(githubUser));
};
