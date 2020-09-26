import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Image } from "react-bootstrap";
import style from "./siteImage.module.scss";

const SiteImage = ({ src, altText }) => {
    return (
        <div>
            <div className={classnames(style.container, style.avatarStyle)}>
                <span>
                    <Image className={style.siteImage} src={src} alt={altText} />
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
