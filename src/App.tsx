import React from 'react';
import {useEffect} from 'react'
import './App.css';
import {RootState} from "./redux/reducers/rootReducer"
import appCreatorActionOne from "./redux/actions/app/appActionsCreator"
import { useSelector,useDispatch } from 'react-redux'

type appResponse = {
  response: boolean
}

function App() {
  
  const appResp :appResponse = useSelector((state:RootState) => state.app.isApp ?? false)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    console.log(appResp.response)
  },[appResp])
  
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=>{appCreatorActionOne(dispatch,false)}}>Click Me</button>
      </header>
    </div>
  );
}
export default App;
