import React from "react";
import { Container } from "./Grid";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { theme } from "../../App/theme";

describe("Container", () => {
  it("should render with default props", () => {
    const wrapper = renderer.create(<Container theme={theme} />).toJSON();
    expect(wrapper).toHaveStyleRule("max-width", "1200px");
    expect(wrapper).toHaveStyleRule("flex-wrap", "initial");
    expect(wrapper).toHaveStyleRule("align-items", "initial");
    expect(wrapper).toHaveStyleRule("justify-content", "initial");
    expect(wrapper).toHaveStyleRule("flex-direction", "row");
  });
  it("should apply max-width attribute", () => {
    const wrapper = renderer
      .create(<Container size="md" theme={theme} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("max-width", "768px");
  });
  it("should apply wrap attribute", () => {
    const wrapper = renderer
      .create(<Container wrap="wrap" theme={theme} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("flex-wrap", "wrap");
  });
  it("should apply align items attribute", () => {
    const wrapper = renderer
      .create(<Container alignItems="center" theme={theme} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("align-items", "center");
  });
  it("should apply align items attribute", () => {
    const wrapper = renderer
      .create(<Container justifyContent="center" theme={theme} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("justify-content", "center");
  });
  it("should apply flex direction attribute", () => {
    const wrapper = renderer
      .create(<Container direction="column" theme={theme} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("flex-direction", "column");
  });
});

describe("Items", () => {
  it("should render with default props", () => {});
});
