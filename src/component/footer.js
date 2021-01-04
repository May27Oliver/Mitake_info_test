import React, { Component } from 'react';
import styled from 'styled-components';
import bsi from '../img/bsi-with-anab.jpg';
import load from '../img/imageLoad.jpg'

const FooterBox = styled.div`
    max-width:800px;
    min-height:108px;
    display:flex;
    flex-direction:column;
    border:1px solid #777;
    padding:10px;
    @media (min-width: 800px) {
        max-width:100%;
        flex-direction:row;
        padding:0;
    }
`

const FooterContactMsg = styled.div`
    flex:0 0 40%;
    height:100%;
    margin:10px 0 30px;
    @media (min-width: 800px) {
        margin:0;
        padding:15px 10px;
    }
`
const FooterLogoBox = styled.div`
    display:flex;
    @media (min-width: 800px) {
        align-items:center;
        flex:1;
    }
`
const FooterContactBox = styled.div`
    width:100%;
    height:100%;
    @media (min-width: 800px) {
        display:flex;
        border-right:1px solid #777;   
        padding-right:10px;
    }
`
const ContactUs = styled.div`
    @media (min-width: 800px) {
        flex:1;
    }
`
const ContactUsPtag=styled.p`
    width:100%;
    font-size:14px;
`

const EmailMsg = styled.div`
    flex:0 0 35%;
    font-size:14px;
`
const LogoIcon1 = styled.div`
    background:url(${bsi}) no-repeat;
    width:115px;
    height:60px;
    margin-left:20px;
    background-size:cover;
`

const LogoIcon2 = styled.div`
    background:url(${load}) no-repeat;
    width:100px;
    height:45px;
    margin-left:20px;
    background-size:cotain;
`

class footer extends Component {
    render() {
        return (
            <FooterBox>
                <FooterContactMsg>
                    <FooterContactBox>
                        <ContactUs>
                            <ContactUsPtag>聯絡我們：</ContactUsPtag>
                            <ContactUsPtag>週一至週五</ContactUsPtag>
                            <ContactUsPtag>08:00~20:00 電話：(02)3789-7555</ContactUsPtag>
                            <ContactUsPtag>08:00~17:30 電話：(02)2514-1125、(02)2514-1242</ContactUsPtag>
                        </ContactUs>
                        <EmailMsg>
                            <ContactUsPtag>E-Mail:<br/>tdcc@tdcc.com.tw</ContactUsPtag>
                            <ContactUsPtag>台北市復興北路363號11樓</ContactUsPtag>
                        </EmailMsg>
                    </FooterContactBox>
                </FooterContactMsg>
                <FooterLogoBox>
                    <LogoIcon1></LogoIcon1>
                    <LogoIcon2></LogoIcon2>
                </FooterLogoBox>
            </FooterBox>
        );
    }
}

export default footer;