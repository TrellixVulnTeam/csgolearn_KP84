import React, { lazy, Suspense } from 'react';
const Maps = lazy(() => import('./Maps.js'));

export default class Throw extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        map: ""
      }
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(str){
      if(this.state.map === str){
        return;
      }
      this.setState(() => ({
        map: str
      }));
    }
  
    render(){
      return(
        <React.Fragment>
            <div className="maps">
              <div className="Dust map" onClick={() => this.handleClick("deDust minimap")}>Dust 2</div>
              <div className="Mirage map" onClick={() => this.handleClick("deMirage minimap")}>Mirage</div>
              <div className="Inferno map" onClick={() => this.handleClick("deInferno minimap")}>Inferno</div>
              <div className="Nuke map" onClick={() => this.handleClick("deNuke minimap")}>Nuke</div>
              <div className="Overpass map" onClick={() => this.handleClick("deOverpass minimap")}>Overpass</div>
              <div className="Vertigo map" onClick={() => this.handleClick("deVertigo minimap")}>Vertigo</div>
            </div>
          <Suspense fallback={<div>...Loading</div>}><Maps class={this.state.map}/></Suspense>
        </React.Fragment>
      );
    }
  }