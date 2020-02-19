import React, { Component } from 'react'
// import ShapesMenu from './ShapesMenu'

export default class Search extends Component {
    render() {
        return (
            <form className = "options" onSubmit={this.props.handleSearch}>
                <div className = "search-container">
                    <div className ="searchbar">
                        {/* <div className = "menu-container">
                            <TypesMenu handleChange = {this.props.handleChange} />
                            <ShapesMenu handleChange = {this.props.handleChange} />
                        </div> */}
                        <div className="radio">
                            <label>
                                Name: 
                                <input 
                                    type = "radio" 
                                    name = "name" 
                                    value = "pokemon"
                                    onChange = {this.props.handleClick}
                                    />
                            </label>
                            <label>
                                Type: 
                                <input 
                                    type = "radio" 
                                    name = "type" 
                                    value = "type"
                                    onChange = {this.props.handleClick}
                                    />
                            </label>
                            <label>
                                Shape: 
                                <input 
                                    type = "radio" 
                                    name = "shape" 
                                    value = "shape"
                                    onChange = {this.props.handleClick}
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
