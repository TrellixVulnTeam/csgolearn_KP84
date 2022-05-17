export default class Footer extends React.Component{
  shouldComponentUpdate(){
    return false;
  }

    render(){
      return(
        <footer>
          <div className="textFooter">
            <p>Рады приветствовать Вас на нашем портале CS:GO. Здесь Вы найдёте самые интересные и популярные раскидки гранат Counter-Strike, будете в курсе самых последних обновлений, а также изучите все тонкости настройки игры.</p>
          </div>
          <div className="listFooter">
            <a onClick={() => this.props.handleNavClick("mainContent")}>Главная</a>
            <a onClick={() => this.props.handleNavClick("throwContent")}>Раскидкa</a>
            <a onClick={() => this.props.handleNavClick("settingContent")}>Настройки</a>
            <a onClick={() => this.props.handleNavClick("updateContent")}>Обновления</a>
          </div>
          <div className="copyRight">© 2022 CSGOLEARN.RU</div>
        </footer>
      );
    }
  }