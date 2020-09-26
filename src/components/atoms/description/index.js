import React from "react";
import PropTypes from "prop-types";
import style from "./description.module.scss";

const Description = ({ text }) => {
    return (
        <div className={}>
            {text}
        </div>
    );
};

Description.propTypes = {
    src: PropTypes.string,
    altText: PropTypes.string,
    className: PropTypes.string,
};

export default Description;
