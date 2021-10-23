import { createRouter, createWebHistory } from "vue-router";
import StartHere from "@/components/StartHere.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue"

const routes = [
  { path: "/", redirect: "/start-here" },
  {
    path: "/start-here",
    component: StartHere,
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
