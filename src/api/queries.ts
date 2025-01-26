import { useQuery } from "@tanstack/react-query";
import { fetchSwapi } from ".";

export const useData = (type: string) => {
  const { data, isLoading, isError } = useQuery({
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
        return res.result[0].properties;
      } else {
        const res = await fetchSwapi(`${type}/?name=${name}`);
        return res.result[0].properties;
      }
    },
    enabled: !!name,
  });

  return { data, isLoading, isError };
}