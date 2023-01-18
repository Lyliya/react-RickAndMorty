import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { getCharacters } from "../services/api";
import Pagination from "../components/Pagination";

import type { Character } from "../types/types";

export default function Characters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page") ?? 1)
  );
  if (currentPage < 1) {
    setCurrentPage(1);
  }
  const { data, isLoading } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: () => getCharacters(currentPage),
  });

  useEffect(() => {
    setSearchParams({
      page: String(currentPage),
    });
  }, [currentPage]);

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex gap-4 flex-wrap p-4 justify-center">
            {data?.data.results.map((e: Character) => (
              <Link to={`/character/${e.id}`} key={e.id}>
                <CharacterCard key={e.id} character={e} />
              </Link>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            max={data?.data.info.pages ?? 1}
            prevPage={setPage}
            nextPage={setPage}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
}
