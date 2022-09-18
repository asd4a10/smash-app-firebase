<script setup>
import { reactive } from "vue";
import { useCharactersStore } from "../stores/useCharactersStore";

const charactersStore = useCharactersStore();
let characters = charactersStore.getCharacters
  ? charactersStore.getTwoCharacters()
  : null;
console.log(characters);
const state = reactive({ characters: characters });

function handleChoice(index) {
  console.log(charactersStore.characters[index].mal_id);
  charactersStore.updateLeaderBoard(charactersStore.characters[index].mal_id);
  // characters = charactersStore.getTwoCharacters();
  characters = charactersStore.getOneCharacter(
    characters[0],
    characters[1],
    index
  );
  state.characters = characters;
}
</script>

<template>
  <div class="container">
    <h1>Choose the one you like more:</h1>
    <div
      v-if="charactersStore.characters"
      class="row d-flex justify-around mt-3"
    >
      <div v-for="character in state.characters" class="col-sm-3">
        <div class="card bg-light hoverable" @click="handleChoice(character)">
          <img
            class="card-img-top character-image"
            :src="charactersStore.characters[character].image_url"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">
              {{ charactersStore.characters[character].name }}
            </h5>
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
.hoverable:hover {
  background-color: brown;
}
</style>
