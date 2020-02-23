import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form className = "options" onSubmit={this.props.handleSearch}>
                <div className = "search-container">
                    <div className ="searchbar">
                        <div className="column-container">
                            <label>
                                Name: 
                                <input 
                                    type = "radio" 
                                    name = "searchOption" 
                                    value = "pokemon"
                                    checked = {this.props.searchOption === "pokemon"}
                                    onChange = {this.props.handleOption}
                                    />
                            </label>
                            <label>
                                Type: 
                                <input 
                                    type = "radio" 
                                    name = "searchOption"
                                    value = "type"
                                    checked = {this.props.searchOption === "type"}
                                    onChange = {this.props.handleOption}
                                    />
                            </label>
                            <label>
                                Shape: 
                                <input 
                                    type = "radio" 
                                    name = "searchOption" 
                                    value = "shape"
                                    checked = {this.props.searchOption === "shape"}
                                    onChange = {this.props.handleOption}
                                    />
                            </label>

                        </div>
                        <label>
                            <input 
                                id = "search"
                                name = "search"
                                placeholder = "Search for your favorite Pokemon"
                                value = {this.props.searchQuery || ''}
                                onChange = {this.props.handleChange}
                                />
                        </label>
                    </div>
                    <div className ="button-div">
                        <button className="search">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}
