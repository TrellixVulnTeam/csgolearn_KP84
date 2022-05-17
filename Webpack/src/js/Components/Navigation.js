export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if($('.list').is(':visible')) {
      $('.list').removeClass('showitems'); 
    }
    else {
      $('.list').addClass('showitems'); 
    }
  }

    render(){
      return(
        <div className="navigation">
          <div onClick={this.handleClick} className="icon">&#9776;</div>
          <div className="list">
            <a onClick={() => {this.props.handleNavClick("mainContent"); this.handleClick()}} className={this.props.activeContent.mainContent}>Главная</a>
            <a onClick={() => {this.props.handleNavClick("throwContent"); this.handleClick()}} className={this.props.activeContent.throwContent}>Раскидкa</a>
            <a onClick={() => {this.props.handleNavClick("settingContent"); this.handleClick()}} className={this.props.activeContent.settingContent}>Настройки</a>
            <a onClick={() => {this.props.handleNavClick("updateContent"); this.handleClick()}} className={this.props.activeContent.updateContent}>Обновления</a>
          </div>
        </div>
        );
    }
}