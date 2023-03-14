import React from 'react'
import { connect} from "react-redux";
import Splash from './Pages/Splash';
import "./css/App.scss"
 const ZuzApp = (props) => {
    const { loaded } = props;
  return (
    loaded ? <div>App is Loaded</div> : <Splash/>
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