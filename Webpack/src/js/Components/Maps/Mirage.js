import vidMirageAsideFromT from '../../../video/Mirage/MirageAsideFromT.mp4';
import vidMirageExitPalaceFromPalace from '../../../video/Mirage/MirageExitPalaceFromPalace.mp4';
import vidMirageJungeFromPit from '../../../video/Mirage/MirageJungeFromPit.mp4';
import vidMirageStairsFromT from '../../../video/Mirage/MirageStairsFromT.mp4';
import vidMirageTicketFromT from '../../../video/Mirage/MirageTicketFromT.mp4';
import smokes from './Smokes.js';


class Mirage extends React.Component{

    render(){
        let video;
        switch(this.props.position){
            case 'MirageAsideFromT':
                video = <div className="video"><video src={vidMirageAsideFromT} controls></video></div>;
                break;
            case 'MirageExitPalaceFromPalace':
                video = <div className="video"><video src={vidMirageExitPalaceFromPalace} controls></video></div>;
                break;
            case 'MirageJungeFromPit':
                video = <div className="video"><video src={vidMirageJungeFromPit} controls></video></div>;
                break;
            case 'MirageStairsFromT':
                video = <div className="video"><video src={vidMirageStairsFromT} controls></video></div>;
                break;
            case 'MirageTicketFromT':
                video = <div className="video"><video src={vidMirageTicketFromT} controls></video></div>;
                break;
            default:
                break;
        }
        return(
            <React.Fragment>
            <div className={this.props.class}>
                <div className="MirageAsideFromT" onClick = {() => this.props.handleClick("MirageAsideFromT")}>&#10008;<p>AsideFromT</p></div>
                <div className="MirageExitPalaceFromPalace" onClick = {() => this.props.handleClick("MirageExitPalaceFromPalace")}>&#10008;<p>ExitPalaceFromPalace</p></div>
                <div className="MirageJungeFromPit" onClick = {() => this.props.handleClick("MirageJungeFromPit")}>&#10008;<p>JungeFromPit</p></div>
                <div className="MirageStairsFromT" onClick = {() => this.props.handleClick("MirageStairsFromT")}>&#10008;<p>StairsFromT</p></div>
                <div className="MirageTicketFromT" onClick = {() => this.props.handleClick("MirageTicketFromT")}>&#10008;<p>TicketFromT</p></div>
            </div>
            {video}
            </React.Fragment>
        );
    }
}

const mapMirage = smokes(Mirage);
export {mapMirage as default};