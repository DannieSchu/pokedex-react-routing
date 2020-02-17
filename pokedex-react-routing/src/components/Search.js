import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form className = "options" onSubmit={this.props.handleSearch}>
                <div className = "search-container">
                    <div className ="searchbar">
                        {/* <TypesMenu handleChange = {handleChange} />
                        <ShapesMenu handleChange = {handleChange} /> */}
                        <label>
                            <input 
                                id="search"
                                name="search"
                                placeholder="Search for your favorite Pokemon"
                                onChange = {this.props.handleChange}
                                value = {this.props.searchQuery}
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
