import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import films from "../../mocks/films.js";
import film from "../../mocks/film.js";

const onTitleClick = () => {};
const onSmallCardClick = () => {};

describe(`Render Main`, () => {
  it(`Render Main`, () => {
    const tree = renderer
    .create(<Main
      movie = {film}
      films = {films}
      onTitleClick = {onTitleClick}
      onSmallCardClick={onSmallCardClick}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
