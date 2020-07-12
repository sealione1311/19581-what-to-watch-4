import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const movie = {
  bg: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  smallImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  name: `The Grand Budapest Hotel`,
  genre: `Drame`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
  Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there.
  When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  rating: `8.9`,
  ratingCount: `740`,
  director: `Wes Anderson`,
  released: `2014`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
};

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App
      movie={movie}
      films = {films} />,
    rootElement
);
