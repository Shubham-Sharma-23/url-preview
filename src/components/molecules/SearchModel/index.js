import React, { useState, useEffect } from "react";
import Avatar from "@atoms/avatar";
import styles from "./SearchModel.module.scss";
import extractURLs from "@utils/extractURLs";
import classnames from "classnames";

const SearchBar = ({ setExtractedURL }) => {
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {
        const urls = extractURLs(searchTerm); //TODO: debounce
        if (urls && urls.length) setExtractedURL(urls[0]);
        else setExtractedURL("");
    }, [searchTerm]);

    return (
        <>
            <Avatar
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                altText="avatar"
                className={styles.avatar}
            />
            <input
                type="text"
                className={classnames("form-control", styles.input)}
                id="searchTerm"
                name="searchTerm"
                onChange={(e) => setsearchTerm(e.target.value)}
            />
        </>
    );
};

export default SearchBar;
