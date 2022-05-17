import smokes from './Smokes.js';
import vidDustXboxFromT from '../../../video/Dust/DustXboxFromT.mov';
import vidDustCtFromMid from '../../../video/Dust/DustCtFromMid.mp4';
import vidDustCtFromMid_2 from '../../../video/Dust/DustCtFromMid_2.mp4';
import vidDustLongCornerFromT from '../../../video/Dust/DustLongCornerFromT.mov';
import vidDustMidDoorsFromT from '../../../video/Dust/DustMidDoorsFromT.mov';

class Dust extends React.Component{

    render(){
        let video;
        switch(this.props.position){
            case 'DustXboxFromT':
                video = <div className="video"><video src={vidDustXboxFromT} controls></video></div>;
                break;
            case 'DustCtFromMid':
                video = <div className="video"><video src={vidDustCtFromMid} controls></video>
                        <video src={vidDustCtFromMid_2} controls></video></div>;
                break;
            case 'DustLongCornerFromT':
                video = <div className="video"><video src={vidDustLongCornerFromT} controls></video></div>;
                break;
            case 'DustMidDoorsFromT':
                video = <div className="video"><video src={vidDustMidDoorsFromT} controls></video></div>;
                break;
            default:
                break;
        }

        return(
            <React.Fragment>
            <div className={this.props.class}>
                <div className="DustXboxFromT" onClick = {() => this.props.handleClick("DustXboxFromT")}>&#10008;<p>XboxFromT</p></div>
                <div className="DustCtFromMid" onClick = {() => this.props.handleClick("DustCtFromMid")}>&#10008;<p>CtFromMid</p></div>
                <div className="DustLongCornerFromT" onClick = {() => this.props.handleClick("DustLongCornerFromT")}>&#10008;<p>LongCornerFromT</p></div>
                <div className="DustMidDoorsFromT" onClick = {() => this.props.handleClick("DustMidDoorsFromT")}>&#10008;<p>MidDoorsFromT</p></div>
            </div>
            {video}
            </React.Fragment>
        );
    }
}

const mapDust = smokes(Dust);
export {mapDust as default};