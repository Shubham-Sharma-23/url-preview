import React from "react";
import PropTypes from "prop-types";
import style from "./avatar.module.scss";
import classnames from "classnames";
import { Image } from "react-bootstrap";

const Avatar = ({ src, altText, className }) => {
    return (
        <div className={classnames(style.avatar, style.avatarStyle, className)}>
            <span>
                <Image className={style.avatarStyle} src={src} alt={altText} roundedCircle />
            </span>
        </div>
    );
};

Avatar.propTypes = {
    src: PropTypes.string,
    altText: PropTypes.string,
    className: PropTypes.string,
};

export default Avatar;
