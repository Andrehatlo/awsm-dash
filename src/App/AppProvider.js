import React from 'react';

const cc = require('cryptocompare')
cc.setApiKey('4d0c36a5cf50aac54b6b42d3356e6bc199058cd9fbcf2e338ac9997edd8d3cc7')

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
      this.fetchCoins();
    }

    fetchCoins = async() => {
      let coinList = (await cc.coinList()).Data;
      this.setState({coinList})
    }

    confirmFavorites = () => {
      this.setState({
        firstVisit: false,
        page: 'dashboard'
      });
      localStorage.setItem('cryptoDash', JSON.stringify({
        test: 'hello'
      }));
    }

    savedSettings(){
      let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
      if(!cryptoDashData){
        return {page: 'settings', firstVisit: true}
      }
      return{};
    }

    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
