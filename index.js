/**
 * Created by ImageDBUser on 2017/3/1.
 */
import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import Nav from './modules/nav';
import Home from './modules/home';
import AddForm from './modules/addForm';
import './css/index.scss';
let item=document.createElement("div");
item.id="basicDiv";
document.body.appendChild(item);
//render(<Nav/>, document.getElementById('basicDiv'));
render((
    <Router history={browserHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Home}/>
            <Route path="/add" component={AddForm}/>
        </Route>
    </Router>
),document.getElementById('basicDiv'))