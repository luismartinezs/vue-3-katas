import { createRouter, createWebHistory } from "vue-router";
const StartHere = import("@/components/StartHere.vue");
const NotFoundComponent = import("@/components/NotFoundComponent.vue");
const KataWrapper = import("@/components/KataWrapper.vue");

const routes = [
  { path: "/", redirect: "/start-here" },
  {
    path: "/start-here",
    component: StartHere,
  },
  {
    path: "/kata/:slug",
    component: KataWrapper,
    redirect: { name: "instructions" },
    children: [
      {
        path: "instructions",
        name: "instructions",
        component: KataWrapper,
      },
      {
        path: "start",
        name: "start",
        component: KataWrapper,
      },
      {
        path: "finish",
        name: "finish",
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
