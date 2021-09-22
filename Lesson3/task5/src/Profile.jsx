import React from 'react';
import moment from 'moment';

import './index.scss';

const Profile = props => {
  const formatDate = moment(new Date(props.userData.birthDate)).format('DD MMM YY');

  return (
    <div className="profile">
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};
export default Profile;
