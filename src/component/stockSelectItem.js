import React, { Component } from 'react';
import styled from 'styled-components';

const SelectItem = styled.div`
    display:flex;
    border:1px solid #777;
    margin:10px;
    padding:10px;
    flex-wrap:wrap;
    @media (min-width: 800px) {
       min-height:30px;
       margin:0;
       padding:0; 
       border:none;
       border-top:1px solid #777;
       border-bottom:1px solid #777;
    }
`
const Item = styled.div`
    flex:0 0 50%;
    @media (min-width: 800px) {
        line-height:30px;
        text-align:center;
        flex:1;
    }
`

class stockSelectItem extends Component {
    render() {
        const {stockInfo} = this.props;
        const {stk_no_name,stk_date,vote_period,clientship,phone} = stockInfo;
        return (
            <SelectItem>
                <Item>{stk_no_name}</Item>
                <Item>{stk_date}</Item>
                <Item>{vote_period}</Item>
                <Item>{clientship}</Item>
                <Item>{phone}</Item>
            </SelectItem>
        );
    }
}

export default stockSelectItem;