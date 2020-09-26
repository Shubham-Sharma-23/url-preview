import React from "react";
import { mount } from "enzyme";

import Title from ".";

describe("Test Cases For <Title />", () => {
    const componentWrapper = mount(<Title size="medium" text="Generate a New Quote" />);

    it("render Title with ", () => {
        componentWrapper.setProps({ size: "large", level: "h2" });
        expect(componentWrapper.find("h1").length).toBe(1);
    });
    it("should match snapshot with title prop", () => {
        expect(componentWrapper).toMatchSnapshot();
    });
});
