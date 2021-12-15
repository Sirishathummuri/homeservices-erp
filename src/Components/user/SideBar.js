/* import React,{useState }from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { StepLabel } from "@material-ui/core";
import { SideBarData  } from "./SideBarData"; 
import  SubMenu from './SubMenu';
import { IconContext } from "react-icons/lib";

const Nav=styled.div`
background:#15171c;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
`;
const NavIcon =styled(Link)`

margin-left:2rem;
font-size:2rem;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
`;
const SidebarNav= styled.nav`
background:#15171c;
width:250px;
height:100vh;
display:flex;
justify-content:flex-start;
position:fixed;
top:0;
left:${({sidebar})=>(sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10; 
`;

const SidebarWrap=styled.div`
width:100%;
`;
const SideBar=()=>

{
    const [sidebar,setSideBar]=useState(false)
    const showSideBar=()=>setSideBar(!sidebar)
    return (
        <div>
            <IconContext.Provider value={{color:'red'}}>
               
            <Nav>
              <NavIcon to="#">
                  <FaIcons.FaBars onClick={showSideBar}/>
              </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
               
                <SidebarWrap>
                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSideBar} /> 
                </NavIcon>
                {SideBarData.map((item,index)=>{
                    return <SubMenu item={item} key={index}/>;

                })}
                </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider> 
        </div>
    )
}
export default  SideBar; */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 80px;
  display: flex;
  justify-content: fixed;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
 width: 250px; 
  height: 100vh;
  display: fixed;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 1;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
     {/*  <img src="logosiriteju.jpg"/>  */}
    </>
  );
};

export default SideBar;