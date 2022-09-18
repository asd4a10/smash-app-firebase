import { defineStore } from "pinia";
import axios from "axios";

export const useAnimeStore = defineStore({
  id: "animeStore",
  state: () => ({
    currentAnime: null,
    animeList: null,
    page: 1,
    loading: false,
  }),
  getters: {
    getCurrentAnime: (state) => state.currentAnime,
    getAnimeList: (state) => state.animeList,
    getPage: (state) => state.page,
    getLoading: (state) => state.loading,
  },
  actions: {
    setCurrentAnime(anime) {
      this.currentAnime = anime;
    },

    async fetchAnimeList() {
      this.loading = true;

      const options = {
        method: "GET",
        url: `https://jikan1.p.rapidapi.com/top/anime/${this.page}/tv`,
        headers: {
          "X-RapidAPI-Key":
            "a8ad5ecaa6mshf43096763a4c04dp1b65c1jsnfbb1f67693fe",
          "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options).catch(function (error) {
        console.error(error);
      });

      console.log(response.data.top);
      this.animeList = response.data.top;
      this.loading = false;
    },

    setPage(newPage) {
      this.page = newPage;
    },
  },
});
