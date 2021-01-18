import React from "react";
import styled from 'styled-components';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  `

export default function(){
    return <Bar>
        <div>child1</div>
        <div>child2</div>
        <div>child3</div>
    </Bar>
}