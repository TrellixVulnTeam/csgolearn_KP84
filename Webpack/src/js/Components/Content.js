import React, { lazy, Suspense } from 'react';

const MainContent = lazy(() => import('./MainContent.js'));
const ThrowContent = lazy(() => import('./ThrowContent.js'));
const SettingContent = lazy(() => import('./SettingContent.js'));
const UpdateContent = lazy(() => import('./UpdateContent.js'));

export default class Content extends React.Component{
  render(){
    let content;
    
    switch(this.props.node){
      case "mainContent":
        content = <MainContent handleNavClick={this.props.handleNavClick} />;
        break;
      case "throwContent":
        content = <ThrowContent />;
        break;
      case "settingContent":
        content = <SettingContent />;
        break;
      case "updateContent":
        content = <UpdateContent />;
        break;
      default:
        break;
    }

    return(
        <Suspense fallback={<div>...Loading</div>}>
          {content}
        </Suspense>
    );
  }
}