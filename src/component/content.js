import React, { Component } from 'react';
import styled from 'styled-components';
import StockSelectItem from './stockSelectItem';
import ActiveItem from './activeItem';
import info from '../info.json';


const {stock_member,activeItem,banner,relativeWeb} = info;

const Wrapper = styled.div`
    max-width:500px;
    margin:118px auto 0;
    @media (min-width: 800px) {
        margin:auto;
        max-width:80%;
        border:1px solid #777;
    }
`

const ActiveMsg = styled.div`
    width:100%;
    min-height:50px;
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
    @media (min-width: 800px) {
        line-height:50px;
        flex-direction:row;
        border:1px solid #777;
        margin-bottom:0px;
    }
`
const paddingLeft = {
    paddingLeft:'50px'
}

const ClientBox = styled.div`
    padding:0 10%;
    height:250px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media (min-width: 800px) {
        border:1px solid #777;
        
    }
`

const StockMsgBox = styled.div`
    width:100%;
    
    @media (min-width: 800px) {
        border:1px solid #777;
        padding:50px;
    }
`
const TabBox = styled.div`
    display:flex;
    width:100%;
    background:#ccc;
    line-height:40px;
    border:1px solid #777;
    @media (min-width: 800px) {
        height:30px;
        border:none;
        background:#fff;
    }
`
const Tab = styled.div`
    width:100px;
    height:100%;
    padding-left:10px;
    color:#fff;
    @media (min-width: 800px) {
        border:1px solid #777;
        line-height:30px;
        text-align:center;
        color:black;
        padding-left:0px;
    }
`
const StockInfoList = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 800px) {
        padding:30px 0;

    }
`
const StockBox = styled.div`
    width:100%;
    @media (min-width: 800px) {
        border:1px solid #777;
        min-height:450px;
    }
` 
const StockListBox = styled.div`
    width:100%;
    padding:0;
    @media (min-width: 800px) {
        padding:0 20px;
        
    }
`

const SearchColumn = styled.div`
    width:100%;
    display:flex;
    margin:10px;
    flex-wrap:wrap;
    min-height:24px;
    @media (min-width: 800px) {
        height:24px;
        margin:10px 0;
        justify-content:space-between;
        padding-left:20px;
        flex:0 0 300px;   
    }
`
const SearchColumnLabel = styled.label`
    flex:0 0 100%;
    margin-bottom:10px;
    @media (min-width:800px) {
        flex:0 0 auto;
        margin-bottom:0px;
    }
`

// 搜尋input
const StockInputColumn = styled.input`
    height:24px;
    margin-right:10px;
    @media (min-width: 800px) {
        margin-right:0px;
        width :100px;
        height:100%;
    }
`
const SearchBtn = styled.button`
    height:24px; 
    width:50px;
    @media (min-width: 800px) {
        height:100%;
    }
`
//中間證券列表
const SelectItem = styled.span`
    width:100%;
    text-align:center;
    border:1px solid #777;
    line-height:40px;
    @media (min-width: 800px) {
        flex:1;
    }
`
const StockItemTitlebox = styled.div`
    width:100%;
    display:flex;
    padding:10px;
    flex-wrap:wrap;
    @media (min-width: 800px) {
        min-height:30px; 
        flex-direction:row;
    }
`
const StockItemTitle = styled.span`
    flex:0 0 50%;
    margin:10px 0;
    @media (min-width: 800px) {
        line-height:30px;
        margin:0;
        text-align:center;
        flex:1;
    }
`
//內容最後一個區塊
const StockBottomBox = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    @media (min-width: 800px) {
        flex-direction:row;
    }
`
const StockWebItemBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
    @media (min-width: 800px) {
        padding:7% 10%;
        align-items:center;
        flex-direction:row;
        flex:1;    
    }
`
const RelativeWebBox = styled.div`
    flex:0 0 50%;
    @media (min-width: 800px) {
        flex:0 0 180px;
        height:250px;
        
    }
`
const RelativeWeb = styled.div`
    width:160px;
    height:210px;
    margin:50px auto 40px;
    border-radius:5px;
    border:1px solid #777;
    padding:10px 5px;
    @media (min-width: 800px) {
        margin:50px auto;
    }
`
const RelativeWebTitleBox = styled.div`
    @media (min-width: 800px) {
        width:100%;
        display:flex;
        margin-bottom:10px;
    }
`
const RelativeWebTitle = styled.div`
    @media (min-width: 800px) {
        flex:1;
    }
`
const MoreWeb = styled.div`
    @media (min-width: 800px) {
        width:70px;
        padding:0 5px;
    }
`
const RelativeWebItem = styled.div`
    width:100%;
    height:24px;
    line-height:24px;
    font-size:14px;
`

const ItemOfBanner = styled.div`
    flex:0 0 45%;
    border:1px solid #777;
    padding:5px;
    margin:5px;
    font-size:12px;
    @media (min-width: 800px) {
        flex: 0 0 30%;
        padding:0;
        min-height:30px;
        line-height:30px;
        margin:10px 0;
        font-size:18px;
    }
`

const ActiveWrap = styled.div`
    display:none;
    @media (min-width: 800px) {
        display:block;
    }
`

class content extends Component {
    render() {
        return (
            <Wrapper>
                <ActiveWrap>
                    <ActiveMsg style={paddingLeft}>活動消息：</ActiveMsg>
                    <ClientBox>
                        {activeItem.map(item=>(<ActiveItem key={item.key} activeInfo={item}></ActiveItem>))}
                    </ClientBox>
                </ActiveWrap>
                <ActiveMsg>
                    <SelectItem>新手上路</SelectItem>
                    <SelectItem>首次使用設定</SelectItem>
                </ActiveMsg>
                <StockMsgBox>
                    <TabBox>
                        <Tab>股東會資訊</Tab>
                    </TabBox>
                    <StockBox>
                        <StockInfoList>
                            <SearchColumn>
                                <SearchColumnLabel>資料排序方式：</SearchColumnLabel>
                                <StockInputColumn/>
                                <SearchBtn>查詢</SearchBtn>
                            </SearchColumn>
                            <SearchColumn>
                                <SearchColumnLabel>搜尋股東會：</SearchColumnLabel>
                                <StockInputColumn/>
                                <SearchBtn>查詢</SearchBtn>
                            </SearchColumn>
                        </StockInfoList>
                        <StockListBox>
                            <StockItemTitlebox>
                                <StockItemTitle>證券代號／名稱</StockItemTitle>
                                <StockItemTitle>股東會日期</StockItemTitle>
                                <StockItemTitle>投票起訖日期</StockItemTitle>
                                <StockItemTitle>股務單位</StockItemTitle>
                                <StockItemTitle>連絡電話</StockItemTitle>
                            </StockItemTitlebox>
                            {stock_member.map(item=>(<StockSelectItem stockInfo={item} key={item.title}></StockSelectItem>))}
                        </StockListBox>
                    </StockBox>
                    <StockBottomBox>
                        <StockWebItemBox>
                            {banner.map(item => (<ItemOfBanner key={item.title}>{item.title}</ItemOfBanner>))}
                        </StockWebItemBox>
                        <RelativeWebBox>
                            <RelativeWeb>
                                <RelativeWebTitleBox>
                                    <RelativeWebTitle>相關網站</RelativeWebTitle>
                                    <MoreWeb>more</MoreWeb>
                                </RelativeWebTitleBox>
                                {relativeWeb.map(item =>(<RelativeWebItem key={item.title}>{item.title}</RelativeWebItem>))}
                            </RelativeWeb>
                        </RelativeWebBox>
                    </StockBottomBox>
                </StockMsgBox>
            </Wrapper>
        );
    }
}

export default content;