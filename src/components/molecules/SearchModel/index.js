import React, { useState, useEffect } from "react";
import Avatar from "@atoms/avatar";
import styles from "./SearchModel.module.scss";

const SearchBar = ({}) => {
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {

        
    }, [searchTerm])

    return (
        <>
            <Avatar
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                altText="avatar"
                className=""
            />
            <input
                type="text"
                className="form-control"
                id="searchTerm"
                name="searchTerm"
                onChange={(e) => setsearchTerm(e.target.value)}
            />
        </>
    );
};

export default SearchBar;
