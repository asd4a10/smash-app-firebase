<script setup>
import { useCharactersStore } from "../stores/useCharactersStore";
import Loader from "@/components/Loader.vue";

const charactersStore = useCharactersStore();
console.log(charactersStore.getCharacters);
</script>

<template>
  <Loader v-if="charactersStore.getLoading" />
  <div class="container mt-3">
    <h1>Leaderboard.</h1>
    <div v-if="charactersStore.getStanding">
      <table class="table table-sm table-bordered w-75">
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(character, index) in charactersStore.getStanding">
            <td>{{ index + 1 }}</td>
            <td class="image-td">
              <img
                :name="charactersStore.getCharactersDict[character[0]].name"
                class="character-image"
                :src="charactersStore.getCharactersDict[character[0]].image_url"
              />
              <!-- {{ charactersStore.getCharactersDict[character[0]].name }} -->
            </td>
            <td>{{ charactersStore.getCharactersDict[character[0]].name }}</td>
            <td>{{ character[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>
      Seems like you did not choose an Anime, so
      <router-link to="/">click here</router-link>
    </p>
  </div>
</template>

<style scoped>
.character-image {
  height: 100px;
}
.table td {
  vertical-align: middle;
}
.table {
  text-align: center;
}
.table .image-td {
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
}
</style>
