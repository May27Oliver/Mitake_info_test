import React, { Component } from 'react';
import styled from 'styled-components';

const Activebox = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid #777;
`

const ActiveTitle = styled.p`
    padding:0 10px;
`

class activeItem extends Component {
    render() {
        const {activeInfo} = this.props;
        const { content } = activeInfo;
        return (
            <Activebox>
                {content.map(item=>(<ActiveTitle key={item.title}>{item.title}</ActiveTitle>))}
            </Activebox>
        );
    }
}

export default activeItem;