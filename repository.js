/**
 * Created by ImageDBUser on 2017/3/2.
 */
export default class Repository{
    constructor(){

    }
    static insertItem(item){
        Repository.items.push(item);
    }
}

Repository.items=[];
