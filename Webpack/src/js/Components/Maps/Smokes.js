export default function smokes (WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                position: ""
            }
    
            this.handleClick = this.handleClick.bind(this);
        }
    
        handleClick(str){
            if(this.state.position === str){
                return;
            }
    
            this.setState(() => ({
                position: str
            }));
        }
    
        render(){
            return(  
                <WrappedComponent class={this.props.class} position={this.state.position} handleClick={this.handleClick}/>
            );
        }
    }
}