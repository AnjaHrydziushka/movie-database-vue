import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviePage from "../views/MoviePage.vue";
import NewMovie from "../views/NewMovie.vue";
import EditPage from "../views/EditPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movies/:id",
    name: "OneMovie",
    component: MoviePage
  },
  {
    path: "/new-movie",
    name: "NewMovie",
    component: NewMovie
  },
  {
    path: "/edit/:id",
    name: "EditPage",
    component: EditPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
