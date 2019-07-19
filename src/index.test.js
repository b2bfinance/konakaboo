import { render } from "@testing-library/react";
import React from "react";
import Component from "./";

describe("Component", () => {
  it("displays a welcome message", () => {
    const { container, getByText } = render(<Component />);
    expect(getByText("Welcome to React components")).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
    <h2>
      Welcome to React components
    </h2>
    `);
  });
});
