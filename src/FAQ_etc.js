import React, { Component, Fragment } from 'react';
import './faq.css';
//import Collapsible from 'react-collapsible';
import {NavLink} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';

export default class FAQ_etc extends Component {

  render() {
   
    return (
      <Fragment>

        <div style={{textAlign:'center', paddingLeft:'300px',  position:"relative"}}>
                <form className="yform">
                    <table  className="table table-bordered">                        
                        <tbody>
                            <tr>
                                
                                <td width="250" >
                                    {/* style={{ textDecoration: 'none' }}은 NavLink 밑줄 제거하기 위해 적용
                                        xmenu는 hover
                                    */}
                                    
                                    <NavLink exact to="/FAQ_signup" style={{ textDecoration: 'none' }}>
                                        <p id="xmenu">가입/로그인</p>
                                    </NavLink>
                                </td>
                                <td width="250">
                                    <NavLink exact to="/FAQ_contents" style={{ textDecoration: 'none' }}>
                                        <p id="xmenu">서비스/컨텐츠</p> 
                                    </NavLink>  
                                </td>
                                <td width="250">
                                    <NavLink exact to="./FAQ_etc" style={{ textDecoration: 'none' }}>
                                        <p id="xmenu">기타</p> 
                                    </NavLink>
                                </td>
                            </tr>                            
                        </tbody> 
                    </table>
                </form>
        </div>

      
      <br></br>
{/* 
      <div className="faqwrap">
        <div className="container">
          <div>
          </div>
          <span>&nbsp; FAQ (yarn add react-collapsible 설치 필요)</span>
          <ul>
           
              <li>
                  <Collapsible trigger="Q. 사기를 당한 것 같아 걱정되어요" className="question">
                          <p className="answer">
                          가까운 경찰서 또는 사이버 안전국, KISA(인터넷침해대응센터)으로 신고해 주세요.
                          <br/>경찰청 사이버 안전 지킴이 바로가기  http://www.police.go.kr/www/security/cyber.jsp
                          <br/>KISA(인터넷침해대응센터) 바로가기 https://www.krcert.or.kr/consult/phishing.do
                          <br/>
                          <br/>사기당한 방법 및 수법을 카페에 알려, 제2의 피해자가 나오지 않도록 합니다.  
                          <br/>사기꾼에게서 온 문자나 연락처, 주소 등 인적 사항을 알아낼 수 있는 정보는 보존하고, 많은 사람과 공유합니다.
                          </p>
                    </Collapsible>
              </li>
          </ul>
      </div>
      </div> */}
      </Fragment>
    );
  }
}