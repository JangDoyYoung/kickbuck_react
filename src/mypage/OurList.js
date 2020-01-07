import React, { Component } from 'react';
import axios from 'axios';
import OurListItem from './OurListItem';
import MyPage from './MyPage';
import '../css/table.css';

export default class OurList extends Component {
  constructor() {
    super();
    this.state = {
      mypageData: [],//스프링에서 게시물 목록을 받아서 저장할 변수
    };
  }

  //리스트를 가져올 함수
  list = () => {
    var url = "http://localhost:9000/controller/mypage/ourlist?user_name=" +
    localStorage.state;
    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data);
        //스프링 서버로부터 받은 데이타로 mypageData 수정
        this.setState({
          mypageData: responseData.data
        });
        console.log("mypagedata"+this.state.mypageData);
      })
      .catch((error) => {
        console.log("mypage list error" + error.data);
      });
  };

  componentDidMount() {
    //랜더링 직전 스프링으로부터 목록을 받아온다
    this.list();
  }

  render() {
    return (
      <div className="list_my">
        <MyPage />
        <table className="list_table">
          <thead>
            <tr className="list_tr">
              <th className="list_image">이미지</th>
              <th className="list_subject">제목</th>
              <th className="list_content">내용</th>
              <th className="list_nickname">작성자</th>
              <th className="list_dday">디데이</th>
              <th className="list_writeday">작성일</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.mypageData.map((row, idx) => (
                <OurListItem idx={idx} key={row.num} row={row} />))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
