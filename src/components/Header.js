import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Article from "../components/Article";
import React from "react";


test("displays the text 'please pass this test'", () => {
  render(<Article />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});


function Header(props) {
      return (
        <h1> hello from the Header!</h1>
      )
}

export default Header;
