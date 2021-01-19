import React from 'react';
import {AppContext} from '../App/AppProvider';

//Checking page against the name of the child, if that is not the case it will return the children

export default function(props) {
  return <AppContext.Consumer>
    {({coinList, prices, firstVisit}) => {
        if (!coinList) {
          return <div> Loading Coins </div>
        }
        if(!firstVisit && !prices) {
          return <div> Loading Prices </div>
      }
      return <div> {props.children} </div>
      }}
    </AppContext.Consumer>;
}
