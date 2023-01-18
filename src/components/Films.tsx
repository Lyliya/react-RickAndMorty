import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSWFilms = async () => {
  return axios.get("https://swapi.dev/api/films/");
};

function Film() {
  const { data, isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: fetchSWFilms,
  });

  return (
    <div>
      <h1>Star wars films</h1>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {data?.data.results.map((e: any) => (
            <li key={e.episode_id}>{e.title}</li>
          ))}
        </>
      )}
    </div>
  );
}

export default Film;
