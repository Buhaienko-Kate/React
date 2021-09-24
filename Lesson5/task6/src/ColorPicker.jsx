import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  getColor = color => {
    this.setState({
      title: color,
    });
  };
  clearColor = () => {
    this.setState({
      title: '',
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.getColor('Coral')}
            onMouseLeave={() => this.clearColor()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.getColor('Aqua')}
            onMouseLeave={() => this.clearColor()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.getColor('Bisque')}
            onMouseLeave={() => this.clearColor()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
