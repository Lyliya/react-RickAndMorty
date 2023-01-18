import type { Character } from "../types/types";

interface PropList {
  character: Character;
}

export default function CharacterCard({ character }: PropList) {
  return (
    <div className="w-80 justify-center items-center bg-slate-600 rounded-lg relative">
      <span
        className={`absolute text-lg font-bold text-white p-2 rounded-lg top-2 right-3 capitalize
                ${character.status === "Alive" ? "bg-green-500" : ""}
                ${character.status === "Dead" ? "bg-red-500" : ""}
                ${character.status === "unknown" ? "bg-slate-500" : ""}`}
      >
        {character.status}
      </span>
      <img src={character.image} alt="" className="w-full rounded-t-lg" />
      <div className="p-6 flex items-center justify-center">
        <p className="text-xl font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden">
          {character.name}
        </p>
      </div>
    </div>
  );
}
