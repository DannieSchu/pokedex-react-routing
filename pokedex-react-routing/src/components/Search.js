import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        // const handleChange = event => {
        //     this.setState({
        //         input: event.target.value
        //     })
        //     }
        return (
            <form className = "options" onSubmit={this.processForm}>
                <div className ="selection-container">
                    {/* <TypesMenu handleChange = {handleChange} />
                    <ShapesMenu handleChange = {handleChange} /> */}
                    <label>
                        <input 
                            id="search"
                            name="search"
                            placeholder="Search for your favorite Pokemon"
                            onChange = {event => this.setState({ searchInput: event.target.value })}
                            value = {this.state.searchInput}
                            />
                    </label>
                </div>
                <div className ="button-div">
                    <button className="search">Search</button>
                </div>
            </form>
        )
    }
}
