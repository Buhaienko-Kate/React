import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggleStatus);
    window.addEventListener('offline', this.onToggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onToggleStatus);
    window.removeEventListener('offline', this.onToggleStatus);
  }
  onToggleStatus = e => {
    this.setState({
      status: e.type,
    });
  };
  render() {
    console.log(this.props.children);
    const changeStatus = this.state.status === 'offline' ? 'status_offline' : '';

    return <div className={`status ${changeStatus}`}>Offline</div>;
  }
}

export default ConnectionStatus;
