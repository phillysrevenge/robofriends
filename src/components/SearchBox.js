
import React from "react";

function SearchBox({ searchfield, searchChange }) {
    return (
        <div className="pa2">
            <input type='search' placeholder="search friends"
                className="pa3 ba bg-lightest-blue b--green"
                onChange={searchChange} />

        </div>
    )
}

export default SearchBox;