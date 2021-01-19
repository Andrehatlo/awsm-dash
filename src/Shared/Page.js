import React from 'react';
import {AppContext} from '../App/AppProvider';

//Checking page against the name of the child, if that is not the case it will return the children

export default function ({name, children}) {
  return <AppContext.Consumer> 
    {
      ({page}) =>
      {
        if (page !== name) {
          return null;
        }
        return <div> {children} </div>;
      }}
    </AppContext.Consumer>;
}
