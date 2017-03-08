/**
 * Created by ImageDBUser on 2017/3/2.
 */
import React from 'react';
import {Link} from 'react-router'
import Search from './search';
import StaffTable from './staffTable';
import Repository from '../repository';

export default class Home extends React.Component{
    constructor()
    {
        super();
        this.state={items: Repository.items}
    };
    searchItem(name)
    {
        if(name=="")
        {
            this.setState({items: Repository.items});
            return;
        }
        let item=null;
        Repository.items.forEach(ii=>{
            if(ii.name==name)
            {
                item=ii;
            }
        })
        if(item)
            this.setState({items:[item]});
        else
            this.setState({items:[]});
    }

    render(){
        return (
            <article>
                <Search searchItem={this.searchItem.bind(this)} />
                <StaffTable items={this.state.items}/>
                <Link to="/add" className='addLink'>Add New Staff</Link>
            </article>
        )
    }
}