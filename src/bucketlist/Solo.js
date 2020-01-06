import React, { Component } from 'react';
import SoloItem from './SoloItem';
import CardDetail from '../CardDetail';
import Axios from 'axios';

class Solo extends Component {

    constructor() {
        super();

        this.state = {
            show: false,      
            bucketData: [],
            bucketOneData: [],
        }

        this.detailShow = this.detailShow.bind(this);
        this.detailHide = this.detailHide.bind(this);
        this.bucketList = this.bucketList.bind(this);
        this.bucketSelect = this.bucketSelect.bind(this);
    }
    

    detailShow = () => {
        this.setState({
            show : true
        })

    }

    detailHide = () => {
        this.setState({
            show : false
        })
    }

    bucketList = () => {
        var url = "http://localhost:9000/controller/soloselect";
        Axios.get(url)
        .then( (resData) => {
            this.setState({
                bucketData: resData.data
            })
        })
        .catch( (error) => {
            console.log("list 오류 " + error)
        })
    }

    bucketSelect = (num) => {
        var url = "http://localhost:9000/controller/oneselect?num=" + num ;

        Axios.get(url)
        .then( (resData) => {
            
            this.setState({
                bucketOneData: resData.data
            })
        })
        .catch( (error) => {
            console.log("select 오류 : " + error);
        })
    }


    componentWillMount() {
        this.bucketList();
    }

    

    

    render() {

        let box;

        if(this.state.show) {
            box = <CardDetail detailHide={this.detailHide} bucketOneData={this.state.bucketOneData} />
        }

        return (
            <div className="buket_form_box">
                {
                    this.state.bucketData.map( (idx) => (
                        <SoloItem detailShow={this.detailShow} bucketSelect={this.bucketSelect} idx={idx} key={idx.num}  />        
                    ))
                }
                {box}
            </div>
        );
    }
}

export default Solo;