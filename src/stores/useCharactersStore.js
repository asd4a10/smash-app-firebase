import { defineStore } from "pinia";
import axios from "axios";
import SortedSet from "js-sorted-set";

export const useCharactersStore = defineStore({
  id: "charactersStore",
  state: () => ({
    characters: null,
    charactersDict: {},
    loading: false,
    pts: {},
    standing: {},
    currentAnime: null,
  }),
  getters: {
    getCharacters: (state) => state.characters,
    getCharactersDict: (state) => state.charactersDict,
    getLoading: (state) => state.loading,
    getStanding: (state) => state.standing[state.currentAnime],
    getCurrentAnime: (state) => state.currentAnime,
  },
  actions: {
    async fetchCharacters(animeId) {
      this.loading = true;
      this.currentAnime = animeId;
      if (!this.standing[animeId]) this.standing[animeId] = [];
      // aot - 16498
      const options = {
        method: "GET",
        url: `https://jikan1.p.rapidapi.com/anime/${animeId}/characters_staff`,
        headers: {
          "X-RapidAPI-Key":
            "a8ad5ecaa6mshf43096763a4c04dp1b65c1jsnfbb1f67693fe",
          "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options).catch(function (error) {
        console.error(error);
      });

      console.log(response.data.characters);
      this.characters = response.data.characters;
      this.loading = false;
      this.setPoints();
    },

    setPoints() {
      this.characters.forEach((character) => {
        this.charactersDict[character.mal_id] = character;
        this.pts[character.mal_id] = 0;
        this.standing[this.currentAnime].push([character.mal_id, 0]);
      });
    },

    updateLeaderBoard(id) {
      this.standing[this.currentAnime] = this.standing[
        this.currentAnime
      ].filter((value) => value[0] !== id);
      let start = 0,
        end = this.standing[this.currentAnime].length;
      let oldPts = this.pts[id],
        newPts = oldPts + 1;
      this.pts[id] = newPts;

      while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (this.standing[this.currentAnime][mid][1] > newPts) {
          start = mid + 1;
        } else {
          end = mid;
        }
      }
      this.standing[this.currentAnime].splice(start, 0, [id, newPts]);
    },

    getTwoCharacters() {
      let first = Math.floor(Math.random() * this.characters.length);
      let second = Math.floor(Math.random() * this.characters.length);

      while (first === second) {
        second = Math.floor(Math.random() * this.characters.length);
      }
      return [first, second];
    },

    getOneCharacter(first, second, winner) {
      let newCharacter = Math.floor(Math.random() * this.characters.length);
      console.log("in get one char", first, second, winner);
      while (newCharacter === first || newCharacter === second) {
        newCharacter = Math.floor(Math.random() * this.characters.length);
      }
      return first === winner ? [first, newCharacter] : [newCharacter, second];
    },
  },
});
