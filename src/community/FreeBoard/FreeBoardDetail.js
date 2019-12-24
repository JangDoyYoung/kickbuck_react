import React, { Component, Fragment } from "react";
import axios from "axios";

export default class FreeBoardDetail extends Component {
  constructor({ history, match }) {
    super();

    this.history = history;
    this.num = match.params.num;
    this.state = {
      selectData: "" //스프링으로부터 dto 데이타를 받을변수
    };

    this.onSelect = this.onSelect.bind(this);
  }
  //글선택 함수
  onSelect = () => {
    var url =
      "http://localhost:8080/controller/community/freeboarddetail?num=" +
      this.num;

    axios
      .get(url)
      .then(responseData => {
        console.log(responseData.data);
        this.setState({
          selectData: responseData.data
        });
      })
      .catch(error => {
        console.log("select error");
      });
  };

  onDelete = () => {
    var url =
      "http://localhost:8080/controller/community/freeboarddetail/delete?num=" +
      this.num;

    axios
      .get(url)
      .then(responseData => {
        //삭제후 돌아가기
        this.history.push("/community/freeboardlist");
      })
      .catch(error => {
        console.log("delte error");
      });
  };

  componentWillMount = () => {
    this.onSelect();
  };

  render() {
    const url = "http://localhost:8080/controller/save/";
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              <th>제목</th>
              <td>{this.state.selectData.title}</td>
            </tr>

            <tr>
              <th>내용</th>
              <td>
                <div>
                  <img src={url + this.state.selectData.imagename} alt="" />
                </div>
                {this.state.selectData.content}
              </td>
            </tr>

            <tr>
              <th>작성자</th>
              <td>{this.state.selectData.writer}</td>
            </tr>

            <tr>
              <th>조회수</th>
              <td>{this.state.selectData.readcnt}</td>
            </tr>

            <tr>
              <th>작성일</th>
              <td>{this.state.selectData.day}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={() => {
            this.history.push("/community/freeboardlist");
          }}
        >
          목록
        </button>
        <button type="button" onClick={this.onDelete.bind(this)}>
          삭제
        </button>
        <button
          type="button"
          onClick={() => {
            this.history.push("/community/freeboardupdate");
          }}
        >
          수정
        </button>
      </Fragment>
    );
  }
}
