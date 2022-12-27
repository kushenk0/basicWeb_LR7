import React from "react"


export default class Content extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fourthColor: 'white',
            fourthBgColor : "blue",
            fifthColor: 'black',
            fifthBgColor : "green",
        };
    };

    changeColor = (elementColor, elementBgColor) => {
        let color = elementColor === 'white' ? 'black' : 'white';
        let bgColor = elementBgColor === 'blue' ? 'green' : 'blue';
        return [color, bgColor];
    };

    thirdChangeColor = () => {
        let [thirdColor, thirdBgColor] = this.changeColor(this.state.thirdColor, this.state.thirdBgColor);
        this.setState({thirdColor, thirdBgColor});
    };

    fourthChangeColor = () => {
        let [fourthColor, fourthBgColor] = this.changeColor(this.state.fourthColor, this.state.fourthBgColor);
        this.setState({fourthColor, fourthBgColor});
    };

    render() {
      return (
          <section>
                  <p>Дата та місце народження: 20 листопада, 2001 року, м. Київ</p>
                  <p id="third-elem"
                                           style={{ color: this.state.thirdColor, backgroundColor: this.state.thirdBgColor }}
                                           onClick={this.thirdChangeColor}>Освіта: Гімназія №323, м.Київ;</p>
                  <p id="fourth-elem"
                                               style={{ color: this.state.fourthColor, backgroundColor: this.state.fourthBgColor }}
                                               onClick={this.fourthChangeColor}> НТУУ "КПІ", м.Київ</p><p>
                  <p>Хоббі:</p>
                    <ul>
                        <li>Спорт</li>
                        <li>Фільми</li>
                        <li>Читання</li>
                        <li>Прогулянки</li>
                    </ul>
              </p>
              <p>Улюблені фільми:
                  <ol>
                      <li>"Легенда"</li>
                      <li>"1+1"</li>
                      <li>"Окулус"</li>
                      <li>"Веном"</li>
                  </ol>
              </p>
              <p>Львів  — місто в Україні, адміністративний центр області, агломерації, району, міської громади,
                         національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол,
                         вважається столицею Галичини та центром Західної України.
                         За кількістю населення — сьоме місто країни (717 273 станом на 01.01.2022).</p>
          </section>
      );
    } ;
};
