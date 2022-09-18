<script setup>
import { useCharactersStore } from "../stores/useCharactersStore";
import { useAnimeStore } from "../stores/useAnimeStore";
import Loader from "@/components/Loader.vue";
import paginate from "vuejs-paginate-next";
import { reactive } from "vue";

const animeStore = useAnimeStore();
const charactersStore = useCharactersStore();

const state = reactive({ page: animeStore.getPage });

// fetch anime list if it is null
if (!animeStore.getAnimeList) animeStore.fetchAnimeList();

function handleAnimeChoice(anime) {
  animeStore.setCurrentAnime(anime);
  charactersStore.fetchCharacters(anime.mal_id);
}

function handlePage(newPage) {
  animeStore.setPage(newPage);
  animeStore.fetchAnimeList();
}
</script>

<template>
  <Loader v-if="charactersStore.getLoading" />
  <div class="container mt-5">
    <h1>Choose an Anime!</h1>
    <paginate
      v-model="state.page"
      :page-count="100"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :first-last-button="true"
      :click-handler="handlePage"
      class="pagination-sm"
    >
    </paginate>
    <!-- current anime below -->

    <div
      v-if="animeStore.getCurrentAnime"
      class="row d-flex justify-start mt-3"
    >
      <div class="col-sm">
        <div class="card bg-amber-4 hoverable h-100">
          <div class="card-body">
            <div class="card-title text-bold">
              Current Anime: {{ animeStore.getCurrentAnime.title }}, go start
              SMASH
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- anime list below -->
    <div class="row d-flex justify-start mt-3">
      <div
        v-for="(anime, index) in animeStore.getAnimeList"
        class="col-sm-2 my-2"
      >
        <div
          @click="handleAnimeChoice(anime)"
          class="card bg-amber-2 hoverable h-100 hover-card"
          :class="{
            'bg-amber-4':
              animeStore.getCurrentAnime &&
              anime.mal_id === animeStore.getCurrentAnime.mal_id,
          }"
        >
          <img
            class="card-img-top anime-image"
            :src="anime.image_url"
            alt="Card image cap"
          />
          <div class="card-body">
            <div class="card-title text-bold">
              {{ index + 1 }}. {{ anime.title }}
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-light-green-4">
              {{ anime.start_date }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anime-image {
  height: 200px;
}
.current-anime-image {
  max-width: 200px;
}
.hover-card:hover {
  border-width: 1px;
  border-color: rgb(0, 0, 0);
}
</style>
