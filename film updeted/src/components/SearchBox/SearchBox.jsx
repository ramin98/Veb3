import React, { Component } from 'react';
import './SearchBox.css';

function SearchBox () {


        return (
            <div className="search-box">
                <form className="search-box__form">
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }

 
export default SearchBox;