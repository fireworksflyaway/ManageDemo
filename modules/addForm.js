/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';
import {IndexLink, browserHistory} from 'react-router';
import Repository from '../repository';
export default class AddForm extends React.Component{
    submitHandle(event){
        event.preventDefault();
        let id=Repository.items.length+1;
        let name=this.refs.name.value;
        let gender=this.refs.male.checked===true?'male':'female';
        let age=this.refs.age.value;
        let department=this.refs.department.value;
        let item={id:id, name:name,gender:gender,age:age,department:department};
        Repository.insertItem(item);
        browserHistory.push("/");
    }
    render(){
        return (
            <article>
                <form className="addForm" onSubmit={this.submitHandle.bind(this)}>
                    <h2>Add Staff</h2>
                    <input type="text" className="formInput" placeholder="Staff Name" ref="name"/>
                    <input type="number" className="formInput" placeholder="Age" ref="age" />
                    <input type="radio" name="genderRadio" value='male' defaultChecked ref="male"/>Male&emsp;
                    <input type="radio" name="genderRadio" value='female' ref="female"/>Female<br />
                    <input type="text" className="formInput" placeholder="Department" ref="department" />
                    <button type="submit">Submit</button>&nbsp;
                    <button type="reset">Reset</button>&emsp;
                    <IndexLink to="/">Back to Home...</IndexLink>
                </form>
            </article>
        )
    }
}