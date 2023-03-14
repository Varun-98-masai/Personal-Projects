import React from 'react'
import { connect } from 'react-redux'

const Inbox = () => {
  return (
    <div className={'inbox rel'}>
        Inbox / Sidebar
    </div>
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

export default connect(mapStateProps,mapDispatchToProps)(Inbox);