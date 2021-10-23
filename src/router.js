import { createRouter, createWebHistory } from "vue-router";
import StartHere from "@/components/StartHere.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import KataWrapper from "@/components/KataWrapper.vue";

const routes = [
  { path: "/", redirect: "/start-here" },
  {
    path: "/start-here",
    component: StartHere,
  },
  {
    path: "/kata/:slug",
    component: KataWrapper,
    children: [
      {
        path: "instructions",
        component: KataWrapper,
      },
      {
        path: "start",
        component: KataWrapper,
      },
      {
        path: "finish",
        component: KataWrapper,
      },
    ],
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
