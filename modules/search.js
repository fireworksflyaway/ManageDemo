/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
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
                <input ref="searchInput" placeholder="Search Staff..." type="text" className="form-control" id="searchInput"/>
                <button ref="searchBtn" className="btn" onClick={this.searchHandle.bind(this)}>Search</button>
            </div>
        )
    }
};