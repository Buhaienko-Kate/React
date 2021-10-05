import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  clickDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.clickDialog}>
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up">∧</i>
            ) : (
              <i className="fas fa-chevron-down">∨</i>
            )}
            {/* {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )} */}
          </button>
        </div>
        {this.state.isOpen && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

// const Expand = ({ title, children }) => {
//   // console.log(isOpen);
//   state = {
//     isOpen: false,
//   };
//   clickDialog = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
//   return (
//     <div className="expand border">
//       <div className="expand__header">
//         <span className="expand__title">{title}</span>
//         <button className="expand__toggle-btn" onClick={this.clickDialog}>
//           {this.state.isOpen ? (
//             <i className="fas fa-chevron-up">∧</i>
//           ) : (
//             <i className="fas fa-chevron-down">∨</i>
//           )}
//           {/* {isOpen ? (
//             <FontAwesomeIcon icon={faChevronUp} />
//           ) : (
//             <FontAwesomeIcon icon={faChevronDown} />
//           )} */}
//         </button>
//       </div>
//       {this.state.isOpen && <div className="expand__content">{children}</div>}
//     </div>
//   );
// };

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  // onClose: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  isOpen: false,
  title: '',
};

export default Expand;
