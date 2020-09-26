import React from "react";
import PropTypes from "prop-types";
import style from "./siteImage.module.scss";
import classnames from "classnames";
import { Image } from "react-bootstrap";

const SiteImage = ({ src, altText }) => {
    return (
        <div>
            <div className={classnames(style.avatar, style.avatarStyle)}>
                <span>
                    <Image className={style.avatarStyle} src={src} alt={altText} roundedCircle />
                </span>
            </div>
        </div>
    );
};

SiteImage.propTypes = {
    src: PropTypes.string,
    altText: PropTypes.string,
    className: PropTypes.string,
};

export default SiteImage;
