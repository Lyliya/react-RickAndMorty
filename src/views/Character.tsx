import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { getCharacter } from "../services/api";

import type { Character } from "../types/types";

function Value({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 items-center text-lg">
      <span className="font-bold">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

export default function Characters() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["charactersDetail", id],
    queryFn: () => getCharacter(Number(id)),
  });

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="absolute z-10 text-white bg-black/70 rounded-lg left-0 text-xl p-3 m-3"
      >
        ← Go back
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <img
            src={data?.data.image}
            alt=""
            className="w-screen h-96 blur object-cover"
          />
          <div className="flex flex-col justify-center items-center gap-4 -mt-52 z-10 relative">
            <img
              src={data?.data.image}
              alt=""
              className={`w-96 h-96 border-8
                            ${
                              data?.data.status === "Alive"
                                ? "border-green-500"
                                : ""
                            }
                            ${
                              data?.data.status === "Dead"
                                ? "border-red-500"
                                : ""
                            }
                            ${
                              data?.data.status === "unknown"
                                ? "border-slate-500"
                                : ""
                            }`}
            />
            <div>
              <h1 className="text-2xl font-bold">{data?.data.name}</h1>
            </div>
            <div className="flex flex-col gap-4">
              <Value label="Name" value={data?.data.name as string} />
              <Value label="Status" value={data?.data.status as string} />
              <Value label="Species" value={data?.data.species as string} />
              <Value label="Type" value={data?.data.type as string} />
              <Value label="Origin" value={data?.data.origin.name as string} />
              <Value
                label="Location"
                value={data?.data.location.name as string}
              />
              <Value
                label="Episode"
                value={`Appear in ${data?.data.episode.length} episode(s)`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
