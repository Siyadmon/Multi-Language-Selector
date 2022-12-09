import React, { Component } from 'react';

export class DropDownMenu extends Component {
  state = {
    selectedLang: '',
  };
  languageSubmitted = (e) => {
    e.preventDefault();
    this.props.clickStatus(this.state.selectedLang);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.languageSubmitted}>
          <select
            value={this.state.selectedLang}
            onChange={(e) => {
              this.setState({ selectedLang: e.target.value });
            }}
          >
            <option value="">Choose Language</option>
            <option value="ta">Tamil</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ml">Malayalam</option>
          </select>
          <button type="submit">Change</button>
        </form>
      </div>
    );
  }
}

export default DropDownMenu;
