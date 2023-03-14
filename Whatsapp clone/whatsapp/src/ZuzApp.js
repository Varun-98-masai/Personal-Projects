import React ,{useEffect} from 'react'
import { connect} from "react-redux";
import Splash from './Pages/Splash';
import Messenger from './Pages/Messenger';
import {BrowserRouter} from "react-router-dom";
import "./css/App.scss"
 const ZuzApp = (props) => {
    const { loaded ,setState } = props;
    useEffect(() =>{
        setTimeout(()=>{
         setState(true)
        },1000)
    },[])
  return (
    <BrowserRouter>
   { loaded ? <Messenger/> : <Splash/>}
    </BrowserRouter>
    
  )
}

const mapStateProps = state => {
    return {
        loaded: state.app.loaded
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setState: (loaded) => dispatch({ type: "APP_STATE" ,state: {loaded : loaded}})
    }
}

export default connect(mapStateProps,mapDispatchToProps)(ZuzApp);