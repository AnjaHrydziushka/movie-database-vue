import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviePage from "../views/MoviePage.vue";
import NewMovie from "../views/NewMovie.vue";
import EditPage from "../views/EditPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/new-movie",
    name: "NewMovie",
    component: NewMovie
  },
  {
    path: "/movies/:id",
    name: "OneMovie",
    component: MoviePage
  },
  {
    path: "/movies/:id/edit",
    name: "EditPage",
    component: EditPage
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
