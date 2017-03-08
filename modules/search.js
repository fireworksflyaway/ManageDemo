/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';

export default class Search extends React.Component{
    searchHandle(event)
    {
        event.preventDefault();
        let name=this.refs.searchInput.value;
        this.props.searchItem(name);
    }
    render(){
        return (
            <div className="searchDiv">
                <input ref="searchInput" placeholder="Search Staff..." type="text" className="searchInput"/>
                <button ref="searchBtn" className="normalBtn" onClick={this.searchHandle.bind(this)}>Search</button>
            </div>
        )
    }
};