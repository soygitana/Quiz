import logo from '../components/logo.svg'
import SVG from 'react-inlinesvg';


import React from 'react'

class Header extends React.Component{
    render() {
        return (
            <header className="app-header">
            <SVG src={logo} className="app-logo" alt="logo" />
          </header>
        )
    }
}

export default Header








