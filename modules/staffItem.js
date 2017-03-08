/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';

export default React.createClass({
    render(){
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.gender}</td>
                <td>{this.props.item.age}</td>
                <td>{this.props.item.department}</td>
            </tr>
        )
    }
});