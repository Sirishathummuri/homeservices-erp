/*  import Recat from 'react'
 import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";

 export const SideBarData=[
     {
         title:'Overview',
         path:'/overview',
         icon:<AiIcons.AiFillHome/>,
         iconClosed:<RiIcons.RiArrowDownSFill/>,
         iconOpened:<RiIcons.RiArrowUpSFill/>, 
         subNav: [
             {
                title:'Overview',
                path:'/overview/users',
                icon:<IoIcons.IoIosPaper/>,
             },
             {
                title:'Overview',
                path:'/overview/revenue',
                icon:<IoIcons.IoIosPaper/>,
             }, 
         ]
     },
     {
        title:'Reports',
        path:'/reports',
        icon:<MdIcons.MdReportGmailerrorred/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>, 
        subNav: [
            {
               title:'Report1',
               path:'/Report/report1',
               icon:<IoIcons.IoIosPaper/>,
            },
            {
               title:'Report2',
               path:'/Report/report2',
               icon:<IoIcons.IoIosPaper/>,
            }, 
        ]
    },

    {
    
        title:'Services',
        path:'/services',
        icon:<GrIcons.GrServicePlay/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>, 
        subNav: [
            {
               title:'PestControl',
               path:'/services/pc',
               icon:<IoIcons.IoIosPaper/>,
            },
            {
               title:'Cleaning',
               path:'/services/cl',
               icon:<IoIcons.IoIosPaper/>,
            }, 
            {
                title:'Cooking',
                path:'/services/ck',
                icon:<IoIcons.IoIosPaper/>,
             }, 
        ]
    }
 ]; */

 import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs";
import SideBar from './SideBar';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/sidebar',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  
  {
    title: 'Services',
    path: '/services',
    icon: <FaIcons.FaCartPlus />
  },
  
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
   title: 'FAQ`S',
   path: '/sidebar/faq',
   icon: <BsIcons.BsFillPeopleFill/>
 },
 {
   title: 'Terms&Conditions',
   path: '/terms',
   icon: <IoIcons.IoMdAlert/>
 },
 {
   title: 'logout',
   path: '/',
   icon: <RiIcons.RiLogoutCircleRFill/>
 },
];
