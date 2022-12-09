import React, { Component } from 'react';
import Component1 from './components/Component1';
import DropDownMenu from './components/DropDownMenu';
import axios from 'axios';

export class App extends Component {
  state = {
    Name1: 'Lion',
    Name2: 'Tiger',
    Name3: 'Elephant',
    translated: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.translated !== this.state.translated) {
      let splitedArray = this.state.translated.split(' ');
      this.setState({
        Name1: splitedArray[0],
        Name2: splitedArray[1],
        Name3: splitedArray[2],
      });
    }
  }

  selectLang = (val) => {
    axios
      .post(
        'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
        {},
        {
          params: {
            q:
              this.state.Name1 +
              ' ' +
              this.state.Name2 +
              ' ' +
              this.state.Name3,

            target: val,
          },
        }
      )
      .then((data) => {
        this.setState({
          translated: data.data.data.translations[0].translatedText,
        });
      });
  };

  render() {
    // console.log(this.state.Name1);
    return (
      <div className="container mt-2">
        <DropDownMenu clickStatus={this.selectLang} />
        <div className="d-flex">
          <Component1
            text1={this.state.Name1}
            text2={this.state.Name2}
            text3={this.state.Name3}
          />
        </div>
      </div>
    );
  }
}

export default App;
