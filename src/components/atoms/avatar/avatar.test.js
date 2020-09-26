import React from "react";
import { mount } from "enzyme";

import Avatar from "./index";

describe("<Avatar />", () => {
    it("renders Avatar", () => {
        const componentWrapper = mount(
            <Avatar src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} altText={"avatar"} />
        );
        expect(componentWrapper).toMatchSnapshot();
    });
});
