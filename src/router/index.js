import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Leaderboard from "../views/LeaderboardView.vue";
import Smash from "../views/SmashView.vue";
import AllCharacters from '@/views/AllCharacters.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: Leaderboard,
    },
    {
      path: "/smash",
      name: "smash",
      component: Smash,
    },
    {
      path: "/all",
      name: "all",
      component: AllCharacters,
    },
  ],
});

export default router;
