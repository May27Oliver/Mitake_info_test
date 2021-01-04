import React, { Component } from 'react';
import styled from 'styled-components';
import info from '../info.json';

const {navbar} = info;
let showNvitems;

const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
if(isMobile){
    showNvitems = navbar.filter(item =>(item.device === 'm & w' || item.device === 'm')) 
}else{
    showNvitems = navbar.filter(item=>(item.device === 'm & w' || item.device === 'w'))
}

const HeaderBox = styled.div`
    position:fixed;
    top:0;
    left:0;
    background:#fff;
    width:100%;
    margin:auto;
    min-height:85px;
    display:flex;
    flex-direction:column;
    margin-bottom:50px;
    @media (min-width: 800px) {
        position:static;
        max-width:100%;
        flex-direction:row;
        height:108px;
        justify-content:space-between;
        border:1px solid #777;
        margin-bottom:0;
    }
`
// Logo區域
const Logo = styled.div`
    width:100%;
    height:108px;
    display:flex;
    border:1px solid #777;
    @media (min-width: 800px) {
        height:100%;
        border:none;
        max-width:300px;
        padding:20px;       
    }
`
const LogoMain = styled.div`
    font-size:25px;
    line-height:108px;
    text-align:center;
    flex:0 0 25%;
    @media (min-width: 800px) {
       flex:0 0 20%; 
    }
    @media (min-width: 800px) {
        font-size:28px;
        line-height:60px;
        flex:0 0 40%;
    }
`

const LogoRightBox = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
`
const LogoSubText = styled.p`
    font-size:23px;
    @media (min-width: 800px) {
        font-size:25px;
    }
`
const LogoPlatform = styled.p`
    font-size:14px;
    @media (min-width: 800px) {
        font-size:16px;
    }
`

// Navbar
const Nabar = styled.div`
    display:${props=>props.show?'flex':'none'};
    flex-direction:column;
    border:1px solid #777;
    @media (min-width: 800px){
        display:flex;
        border:none;
        margin-right:25px;
        flex-direction:row;
        align-items:center;
    }
`

const NvItem = styled.a`
    font-size:14px;
    border:1px solid #777;
    padding:0 5px;
    text-align:center;
    cursor:pointer;
    height:50px;
    color:#fff;
    line-height:50px;
    background:#0F296F;
    font-size:18px;
    @media (min-width: 800px){  
        border:none;
        border-right:1px solid #777;  
        padding:0 5px;
        font-size:16px;
        text-align:left;
        padding:0 10px;
        color:black;
        height:24px;
        font-size:16px;
        line-height:24px;
        background:#FFF;
    }
`
const Hambox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:30px;
    @media (min-width: 800px){    
        display:none;
    }
`
const Hamber = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#0F296F;
`
const HamberMeat = styled.span`
    width:25px;
    height:3px;
    position:relative;
    background:#fff;
    border-radius:2px;
    &:before{
        content:"";
        position:absolute;
        top:-8px;
        left:0px;
        width:25px;
        height:3px;
        background:#fff;
        border-radius:2px;
    }
    &:after{
        content:"";
        position:absolute;
        top:8px;
        left:0px;
        width:25px;
        height:3px;
        background:#fff;
        border-radius:2px;
    }
`

class header extends Component {
    constructor(){
        super();
        this.state={
            showNbar:true
        }
    }
    showNavbar=()=>{
        console.log('this.state.showNbar',this.state.showNbar);
        this.setState({
            showNbar:this.state.showNbar?false:true
        })
    }
    render() {
        return (
            <HeaderBox>
                <Logo>
                   <LogoMain>TDCC</LogoMain>
                   <LogoRightBox>
                        <LogoSubText>股東e票通</LogoSubText>
                        <LogoPlatform>股東會電子投票平台</LogoPlatform>
                   </LogoRightBox>
                   <Hambox>
                       <Hamber onClick={this.showNavbar}>
                           <HamberMeat></HamberMeat>
                       </Hamber>
                   </Hambox>
                </Logo>
                <Nabar show={this.state.showNbar}>
                    {showNvitems.map(item =>(<NvItem key={item.title} htmlFor="#">{item.title}</NvItem>))}
                </Nabar>
            </HeaderBox>
        );
    }
}

export default header;