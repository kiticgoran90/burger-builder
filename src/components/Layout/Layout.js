import React, { useState } from 'react'
import { connect } from 'react-redux'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

const Layout = (props) => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false)
    }

    const drawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }

    return (
        <>
            <Toolbar isAuth={props.isAuthenticated} drawerToggleClicked={drawerToggleHandler} />
            <SideDrawer isAuth={props.isAuthenticated} open={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    )

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)
