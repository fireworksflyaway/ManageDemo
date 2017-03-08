/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';

export default React.createClass({
    render(){
        return (
            <div>
                <nav>
                    <label className="navLabel">Manage Demo</label>
                </nav>
                {this.props.children}
            </div>
        )
    }
});
