<template>
  <div>
    <h1>All movies</h1>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="container">
        <h2>{{ movie.title }}</h2>
        <p>
          <em>{{ movie.year }}</em>
        </p>
        <p>{{ movie.director }}</p>
        <p>{{ movie.genre }}</p>
        <p>{{ movie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllMovies",
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Ace Ventura: Pet Detective",
          year: 1994,
          image: "../assets/ace-ventura.jpg",
          director: "Tom Shadyac",
          genre: "comedy",
          description:
            "A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins."
        },
        {
          id: 2,
          title: "The Secret Life of Pets",
          year: 2016,
          image: "../assets/pets.jpg",
          director: "Chris Renaud, Yarrow Cheney",
          genre: "animation",
          description:
            "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes."
        },
        {
          id: 3,
          title: "Joker",
          year: 2019,
          image: "../assets/joker.jpg",
          director: "Todd Phillips",
          genre: "drama",
          description:
            "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
        },
        {
          id: 4,
          title: "Doctor Sleep",
          year: 2019,
          image: "../assets/doctor-sleep.jpg",
          director: "Mike Flanagan",
          genre: "horror",
          description:
            "Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal."
        },
        {
          id: 5,
          title: "Forgetting Sarah Marshall",
          year: 2008,
          image: "../assets/marshall.jpg",
          director: "Nicholas Stoller",
          genre: "comedy",
          description:
            "Devastated Peter takes a Hawaiian vacation in order to deal with the recent break-up with his TV star girlfriend, Sarah. Little does he know, Sarah's traveling to the same resort as her ex - and she's bringing along her new boyfriend."
        },
        {
          id: 6,
          title: "Pride & Prejudice",
          year: 2005,
          image: "../assets/pride.jpg",
          director: "Joe Wright",
          genre: "romance",
          description:
            "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?"
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  padding: 0;
}

.movies {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

.container {
  margin-top: 10px;
  width: 25%;
}
</style>
