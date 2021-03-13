import React from 'react';
import {useEffect} from 'react'
import './App.css';
import {RootState} from "./redux/reducers/rootReducer"
import { connect } from "react-redux";
import appCreatorActionOne from "./redux/actions/app/appActionsCreator"

function App({dispatchApp,appResp}:any) {
  
  useEffect(()=>{
    console.log(appResp)
  },[appResp])
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=>{dispatchApp("Josef")}}>Click Me</button>
      </header>
    </div>
  );
}

export const mapStateToProps = (state: RootState) => {
  return {
    appResp: state.app.isApp,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatchApp(payload:any){
      return appCreatorActionOne(dispatch, payload)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
