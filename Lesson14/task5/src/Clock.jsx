import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset).toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(
      () => setTime(getTimeWithOffset(offset).toLocaleTimeString()),
      1000,
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const currentTime = getTimeWithOffset(offset).toLocaleTimeString();
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{currentTime}</div>
    </div>
  );
};

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: props.location,
//       time: getTimeWithOffset(props.offset).toLocaleTimeString(),
//     };
//   }
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         time: getTimeWithOffset(this.props.offset).toLocaleTimeString(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{this.state.time}</div>
//       </div>
//     );
//   }
// }

export default Clock;
