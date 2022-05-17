import React, {lazy} from 'react';
const Dust = lazy(() => import('./Dust.js'));
const Mirage = lazy(() => import('./Mirage.js'));
const Inferno = lazy(() => import('./Inferno.js'));


export default class Maps extends React.Component{
    render(){
        let map;
        switch(this.props.class){
            case "deDust minimap":
                map = <Dust class={this.props.class} />;
                break;
            case "deMirage minimap":
                map = <Mirage class={this.props.class} />;
                break;
            case "deInferno minimap":
                map = <Inferno class={this.props.class} />;
                break;
            case "deNuke minimap":
                map = <div className={this.props.class}>Раскидка к сожалению не готова.</div>;
                break;
            case "deOverpass minimap":
                map = <div className={this.props.class}>Раскидка к сожалению не готова.</div>;
                break;
            case "deVertigo minimap":
                map = <div className={this.props.class}>Раскидка к сожалению не готова.</div>;
                break;
            default:
                break;
        }

        return(
            <React.Fragment>
                {map}
            </React.Fragment>
        );
    }
}