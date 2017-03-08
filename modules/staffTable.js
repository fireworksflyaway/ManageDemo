/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';
import StaffItem from './staffItem';
export default React.createClass({
    render(){
        let items=[];
        if(this.props.items.length==0){
            items.push(<tr><td colSpan="5">No Staff</td></tr>);
        }
        else
        {
            this.props.items.forEach(item=>{
                items.push(<StaffItem key={item.key} item={item} />)
            });
        }
        return (
            <table className="staffTable" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Staff ID</th>
                        <th>Staff Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        )
    }
});