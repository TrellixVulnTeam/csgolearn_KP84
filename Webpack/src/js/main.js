'use strict';
import React, { lazy, Suspense } from 'react';
import '../scss/main.scss';
import '../index.html';
const Navigation = lazy(() => import('./Components/Navigation.js'));
const Content = lazy(() => import('./Components/Content.js'));
const Footer = lazy(() => import('./Components/Footer.js'));


class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainContent: true,
      throwContent: false,
      settingContent: false,
      updateContent: false,
      node: "mainContent",
      activeContent: {
        mainContent: "activeCon",
        throwContent: "",
        settingContent: "",
        updateContent: ""
      }
    }

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(str){
    if(str === this.state.node){
      return;
    }
    const prevSt = this.state.node;
    this.setState(() => ({
      [prevSt]: false,
      [str]: true,
      node: str,
      activeContent:{
        [prevSt]: "",
        [str]: "activeCon"
      }
    }));
  }

  render(){
    const node = this.state.node;

  return(
    <div className ="container">
      <Suspense fallback={<div>...Loading</div>}>
      <Navigation handleNavClick={this.handleNavClick} activeContent={this.state.activeContent}/>
      <Content handleNavClick={this.handleNavClick} node={node}/>
      <Footer handleNavClick={this.handleNavClick}/>
      </Suspense>
    </div>
  ); 
  }
}


ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
