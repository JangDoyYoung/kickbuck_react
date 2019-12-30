import React,{Component} from 'react';
import axios from 'axios';
import './style.css';

export default class Detail extends Component{
    constructor({match}){
        super();
        this.num=match.params.num;
        this.state={
            selectData:''
        }        
    }

    componentWillMount=()=>{
        this.onSelect();
    }
    onSelect=()=>{
       var url = "http://localhost:9000/controller/enroll/select?num="+this.num;
       axios.get(url)
       .then((responseData)=>{
           console.log(responseData.data);
           this.setState({
            selectData:responseData.data
           });
       })
       .catch((error)=>{
           console.log("select  error:"+error.data);
       });
    }

    render(){
        const url="http://localhost:9000/controller/enroll/list";
        let d=this.state.selectData;

        return (
            <div className="hello">
                
            </div>
        )
    }
}

