import { useQuery } from "@tanstack/react-query";
import { fetchSwapi } from ".";
import { AllCharactersResponse, AllFilmsResponse, AllStarshipsResponse, Character, Film, Starship } from "../types";

export const useData = (type: string) => {
  const { data, isLoading, isError } = useQuery<AllCharactersResponse | AllFilmsResponse | AllStarshipsResponse>({
    queryKey:[type],
    queryFn: async () => fetchSwapi(type).then((res) => res)
  });

  return { data, isLoading, isError };
}

export const useSearchByName = (type: string, name: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey:[`${type}:${name}`],
    queryFn: async () => {
      if (type === 'films') {
        const res = await fetchSwapi(`${type}/?title=${name}`);
        return res.result[0];
      } else {
        const res = await fetchSwapi(`${type}/?name=${name}`);
        return res.result[0];
      }
    },
    enabled: !!name,
  });

  return { data, isLoading, isError };
}

export const useDetailedCharacter = (uid: string) => {
  const { data, isLoading, isError } = useQuery<Character>({
    queryKey:[`people:${uid}`],
    queryFn: async () => fetchSwapi(`people/${uid}`).then((res) => res).then((res) => res.result.properties)
  });

  return { data, isLoading, isError };
}

export const useDetailedFilm = (uid: string) => {
  const { data, isLoading, isError } = useQuery<Film>({
    queryKey:[`films:${uid}`],
    queryFn: async () => fetchSwapi(`films/${uid}`).then((res) => res).then((res) => res.result.properties)
  });

  return { data, isLoading, isError };
}

export const useDetailedStarship = (uid: string) => {
  const { data, isLoading, isError } = useQuery<Starship>({
    queryKey:[`starships:${uid}`],
    queryFn: async () => fetchSwapi(`starships/${uid}`).then((res) => res).then((res) => res.result.properties)
  });

  return { data, isLoading, isError };
}