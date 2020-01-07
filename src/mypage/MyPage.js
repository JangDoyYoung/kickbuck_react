import React, { Component } from 'react';
import Category from './Category';
//import myimg from '../image/VS.jpg'
import '../css/mypage.css'
import Axios from 'axios';

export default class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      selectData: '',
      num: 1,
      image: ''
    }
  }
  //마이메이지 호출되는 함수
  onSelect = () => {
    console.log("num=" + this.state.num)
    var url = "http://localhost:9000/controller/profile/image?num=" + this.state.num;

    Axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);
        this.setState({
          image: responseData.data.image
        });
        console.log("image:" + this.state.image);
      })
      .catch((error) => {
        console.log("select one error");
      })
  }
  componentWillMount() {
    //렌더링 직전 스프링으로부터 목록을 받아온다
    this.onSelect();//누르기전에 실행해주기위해 필요함
    //버튼이 없으면 무조건 필요함
  }
  render() {
    const url = "http://localhost:9000/controller/save/";
    return (
      <div>
        <div className="top_logo"></div>
        <div className="profile_img">
          <img style={{width:"200px",height:"200px"}} src={url + this.state.image} alt="logo" />
        </div>
        <div className="profile_name">
          <b>그나</b>님의 마이페이지
        </div>
        <Category />
      </div>
    );
  }
}
