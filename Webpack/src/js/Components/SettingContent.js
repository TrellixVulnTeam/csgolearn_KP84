import React from "react";

export default class SettingContent extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(h){
      let elem = document.querySelector('.'+h);
      elem.scrollIntoView(top);
    }
  
    render() {
      return (
        <div className="content">
          <h1>Настройки</h1>
          <p>В данной статье мы разберем все консольные команды для CS:GO. Мы постарались не упустить ни одной важной команды, которая могла бы Вам пригодится.</p>
          <div className="settingNav">
          <a onClick={() => this.handleClick("h1")}>Настройки сервера</a>
          <a onClick={() => this.handleClick("h2")}>Настройки мышки</a>
          <a onClick={() => this.handleClick("h3")}>Чит команды</a>
          <a onClick={() => this.handleClick("h4")}>Команды для смены рук</a>
          <a onClick={() => this.handleClick("h5")}>Настройки радара</a>
          <a onClick={() => this.handleClick("h6")}>Сетевые настройки</a>
        </div>
          <p>Всем известно, что консоль в CS:GO имеет большую роль в игре. Мы не знаем не одной игры, где настолько подробно необходимо знать описание команд. Пожалуй, знать все команды в кс го в консоли вовсе и не обязательно. При этом большое количество команд обязательно необходимо прописывать перед матчем. Вернее можно и не прописывать, а сохранить в свой cfg и постоянно использовать его. Но большинство игроков все же переоценивают консоль в CS:GO и слишком сильно зацикливаются на командах, да и в общем над cfg. Консольные команды - это хороший инструмент для организации комфортной игры. Если только это не чит команды для кс го (каким, например, можно считать r drawothermodels 2). Поэтому держите, друзья, подробный список. Среди них есть реально полезные команды для кс го в консоли, в том числе команды для тренировки в кс го.</p>
          <h1 className="h1">Настройки сервера</h1>
          <ul>
            <li><span>mp_restartgame 1</span> - сделать рестарт сервера;</li>
            <li><span>bot_kick</span> - убрать ботов с сервера;</li>
            <li><span>bot_add_ct</span> - добавить бота за CT;</li>
            <li><span>bot_add_t</span> - добавить бота за T;</li>
            <li><span>mp_maxmoney 15000</span> - максимальное количество денег $15000;</li>
            <li><span>mp_startmoney 5000</span> - количество денег в начале игры $5000;</li>
            <li><span>mp_warmup_end</span> - закончить разминку;</li>
          </ul>
          <h1 className="h2">Настройки мышки</h1>
          <ul>
            <li><span>sensitivity 5.5</span> - устанавливает сенсу мышки;</li>
            <li><span>m_customaccel 0</span> - отключает ускорение мыши;</li>
            <li><span>m_customaccel_exponent 0</span> - выключить измерение коэффициента пропорциональности акселерации;</li>
            <li><span>m_customaccel_max 0</span> - максимальный коэффициент пропорциональности акселерации;</li>
            <li><span>m_customaccel_scale 0.04</span> - обычное (стандартное) значение акселерации мышки;</li>
          </ul>
          <h1 className="h3">Чит команды</h1>
          <ul>
            <li><span>noclip</span> - включает режим полета (прохождение сквозь стены и объекты), так же эта команда отключает данную возможность;</li>
            <li><span>mat_wireframe 1</span> - включает возможность просмотра каркаса стен;</li>
            <li><span>mat_wireframe 0</span> - отключает возможность просмотра каркаса стен;</li>
            <li><span>god</span> - включает режим бессмертия, при повторном использовании отключает данный режим;</li>
            <li><span>r_drawothermodels 2</span> - включает возможность просмотра сквозь стены;</li>
            <li><span>r_drawothermodels 1 </span> - отключает возможность просмотра сквозь стены;</li>
          </ul>
          <h1 className="h4">Команды для смены рук</h1>
          <ul>
            <li><span>cl_righthand 0</span> - устанавливает оружие в левую руку;</li>
            <li><span>cl_righthand 1</span> - устанавливает оружие в правую руку;</li>
            <li><span>viewmodel_presetpos 1</span> - обычный вид оружия в руке;</li>
            <li><span>viewmodel_presetpos 2</span> - большой вид оружия в руке;</li>
            <li><span>viewmodel_fov 55</span> - приближение/отдаление модели оружия на экране (минимальное значение -54, максимальное значение 65);</li>
            <li><span>viewmodel_offset_x 0</span> - позиция оружия и руки по оси х;</li>
          </ul>
          <h1 className="h5">Настройки радара</h1>
          <ul>
            <li><span>drawradar</span> - включить радар;</li>
            <li><span>hideradar</span> - скрыть радар;</li>
            <li><span>cl_radar_always_centered 0</span> - центрирование карты;</li>
            <li><span>cl_radar_scale 0.3 или 0.4</span> - размер карты;</li>
            <li><span>cl_radar_icon_scale_min 0.7</span> - размер точек игроков на карте;</li>
          </ul>
          <h1 className="h6">Сетевые настройки</h1>
          <ul>
            <li><span>net_channels 0</span> - отобразить информацию о канале в консоли (та же самая информация что и у команды net_graph);</li>
            <li><span>net_graph 1</span> - включить панель информации о соединении;</li>
            <li><span>net_graphheight 40</span> - высота net_graph панели;</li>
            <li><span>net_graphmsecs 400</span> - изменения скорости обновления блока;</li>
            <li><span>net_graphpos 1</span> - место положение net_graphа;</li>
            <li><span>net_graphproportionalfont 0.5</span> - размер net_graph;</li>
            <li><span>net_graphshowinterp 1</span> - показывает строку интерполяции;</li>
            <li><span>net_graphshowlatency 1</span> - рисует график Ping и пакетов;</li>
            <li><span>net_graphsolid 1</span> - выключить прозрачность лагомера;</li>
            <li><span>net_graphtext 1</span> - включить текст в блоке;</li>
            <li><span>net_maxroutable 1260</span> - максимальная фрагментация в байтах на пакет;</li>
            <li><span>net_scale 5</span> - размер графика;</li>
            <li><span>option_duck_method 0</span> - удерживать/одиночное нажатие клавишу приседания;</li>
            <li><span>option_speed_method 0</span> - удерживать/одиночное нажатие клавишу бега;</li>
            <li><span>rate 30000</span> - количество байтов, которые клиент может получить от сервера за секунду.</li>
          </ul>
        </div>
      );
    }
  }