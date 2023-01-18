import axios from "axios";

const getCharacters = async (page: number) => {
  return axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
};

const getCharacter = async (id: number) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
};

export { getCharacters, getCharacter };
