import React from "react";
import PropTypes from "prop-types";
import style from "./title.module.scss";
import classnames from "classnames";

export const sizes = ["large", "medium", "small"];

const Title = ({ text, size = "large", level = 1, className }) => {
    // <h levels 1 - 6
    let HeadingComponent = level > 0 && level < 7 ? `h${level}` : "h1";

    return <HeadingComponent className={classnames(style.title, className, style[size])}>{text}</HeadingComponent>;
};

Title.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(["large", "medium", "small"]),
    level: PropTypes.string,
    className: PropTypes.string,
};

export default Title;
