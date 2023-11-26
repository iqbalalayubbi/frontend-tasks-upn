import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Tasks from "../views/Tasks.vue";
import DetailTasks from "../views/DetailTasks.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: DetailTasks,
            // component: Tasks,
            // component: HomeView,
        },
    ],
});

export default router;
