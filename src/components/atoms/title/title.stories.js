import React from "react";
import Title from "./";

export default {
    title: "Title",
    component: Title,
};

export const showLargeTitle = () => <Title text="Generate a New Quote" />;

export const showMediumTitle = () => <Title size="medium" text="Generate a New Quote" />;

export const showSmallTitle = () => <Title size="small" text="Generate a New Quote" />;

export const showSubTitle = () => <Title size="subtitle" text="Customer Details" />;
