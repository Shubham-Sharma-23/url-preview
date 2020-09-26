import React from "react";
import { action } from "@storybook/addon-actions";
import Avatar from "./index";

export default {
    title: "Avatar",
    component: Avatar,
};

export const ShowAvatar = () => (
    <Avatar
        onClickHandler={action("avatar-click")}
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        altText="avatar"
        className=""
    />
);
