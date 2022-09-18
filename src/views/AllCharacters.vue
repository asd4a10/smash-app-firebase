<script setup>
import { useCharactersStore } from "../stores/useCharactersStore";
import Loader from "@/components/Loader.vue";

const charactersStore = useCharactersStore();
console.log(charactersStore.getCharacters);
</script>

<template>
  <Loader v-if="charactersStore.getLoading" />
  <div class="container mt-3">
    <h1>All Characters</h1>
    <div v-if="charactersStore.getCharacters">
      <div class="row">
        <div
          v-for="(character, index) in charactersStore.getCharacters"
          class="col-sm-2 mb-2"
        >
          <div class="card h-100">
            <img
              class="card-img-top character-image"
              :src="character.image_url"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ index + 1 }}. {{ character.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else>
      Seems like you did not choose an Anime, so
      <router-link to="/">click here</router-link>
    </p>
  </div>
</template>

<style scoped>
/* .character-image {
      height: 300px;
    } */
</style>
