import React from 'react';
import {AppContext} from '../App/AppProvider';
import styled from 'styled-components';

const PriceGrid = styled.div`
  display: grid;
`

export default function() {
    return(
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map(price => <div> {Object.keys(price)[0]} </div>)}
                </PriceGrid>
            )}
        </AppContext.Consumer>
    );
}
