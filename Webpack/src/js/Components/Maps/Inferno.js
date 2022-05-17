import vidInfernoCoffinsFromBanana from '../../../video/Inferno/InfernoCoffinsFromBanana.mp4';
import vidInfernoCtFromBanana from '../../../video/Inferno/InfernoCtFromBanana.mp4';
import vidInfernoLongFrom2mid from '../../../video/Inferno/InfernoLongFrom2mid.mp4';
import vidInfernoMotoFromMid from '../../../video/Inferno/InfernoMotoFromMid.mp4';
import vidInfernoShortFrom2mid from '../../../video/Inferno/InfernoShortFrom2mid.mp4';
import smokes from './Smokes.js';

class Inferno extends React.Component{

    render(){
        let video;
        switch(this.props.position){
            case 'InfernoCoffinsFromBanana':
                video = <div className="video"><video src={vidInfernoCoffinsFromBanana} controls></video></div>;
                break;
            case 'InfernoShortFrom2mid':
                video = <div className="video"><video src={vidInfernoShortFrom2mid} controls></video></div>;
                break;
            case 'InfernoLongFrom2mid':
                video = <div className="video"><video src={vidInfernoLongFrom2mid} controls></video></div>;
                break;
            case 'InfernoMotoFromMid':
                video = <div className="video"><video src={vidInfernoMotoFromMid} controls></video></div>;
                break;
            case 'InfernoCtFromBanana':
                video = <div className="video"><video src={vidInfernoCtFromBanana} controls></video></div>;
                break;
            default:
                break;
        }

        return(
            <React.Fragment>
            <div className={this.props.class}>
                <div className="InfernoCoffinsFromBanana" onClick = {() => this.props.handleClick("InfernoCoffinsFromBanana")}>&#10008;<p>CoffinsFromBanana</p></div>
                <div className="InfernoShortFrom2mid" onClick = {() => this.props.handleClick("InfernoShortFrom2mid")}>&#10008;<p>ShortFrom2mid</p></div>
                <div className="InfernoLongFrom2mid" onClick = {() => this.props.handleClick("InfernoLongFrom2mid")}>&#10008;<p>LongFrom2mid</p></div>
                <div className="InfernoMotoFromMid" onClick = {() => this.props.handleClick("InfernoMotoFromMid")}>&#10008;<p>MotoFromMid</p></div>
                <div className="InfernoCtFromBanana" onClick = {() => this.props.handleClick("InfernoCtFromBanana")}>&#10008;<p>CtFromBanana</p></div>
            </div>
            {video}
            </React.Fragment>
        );
    }
}

const mapInferno = smokes(Inferno);
export {mapInferno as default};