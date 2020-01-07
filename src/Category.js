import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from './image/main/search_icon.png';
import SearchBar from './SearchBar';

class Category extends Component {

        state = {
            opac: 0,
            visibi: 'hidden',
        }


    goSearch() {
        if(this.state.visibi === 'hidden') {
          this.setState({
            opac: 1,
            visibi: 'inherit'
          })
        }
        else {
          this.setState({
            opac: 0,
            visibi: 'hidden'
          })
        }
      }


    render() {

        const searchBg = {
            opacity: this.state.opac,
            visibility: this.state.visibi
        }

        const activeStyle = {
            borderBottom: '2px solid #3886CE',
            height: '50px',
            boxSizing: 'border-box'
        };

        return (
            <div className="category_bar">
                <ul>
                    <NavLink exact to='/' activeStyle={activeStyle}>
                        <li >
                            모두보기    
                        </li>
                    </NavLink>
                    <NavLink exact to='/solo' activeStyle={activeStyle} style={{borderLeft:'1px solid #ddd'}}>
                        <li>
                            개인  
                        </li>
                    </NavLink>
                    <NavLink exact to='/with' activeStyle={activeStyle} style={{borderLeft:'1px solid #ddd'}}>
                        <li>
                            함께하는
                        </li>
                    </NavLink>
                    <NavLink exact to='/off' activeStyle={activeStyle} style={{borderLeft:'1px solid #ddd'}}>
                        <li>
                            OFF
                        </li>
                    </NavLink>
                </ul>
                <div className="search_box" onClick={this.goSearch.bind(this)}>
                  SEARCH <img src={search_icon} alt=""  />
                </div>

                <div className="searchbox" style={searchBg}>
                    <SearchBar goSearch={this.goSearch.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Category;