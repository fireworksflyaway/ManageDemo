/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render(){
        return (
            <div>
                <nav>
                    <label className="navLabel">Manage Demo</label>
                    <Link to="/">Home</Link>
                </nav>
                {this.props.children}
            </div>
        )
    }
});
