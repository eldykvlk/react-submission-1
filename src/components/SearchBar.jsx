import React from "react";

function SearchBar({ searchKeyword, onSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Cari catatan berdasarkan judul..."
                value={searchKeyword}
                onChange={onSearch}  
            />
        </div>
    );
}

export default SearchBar;
