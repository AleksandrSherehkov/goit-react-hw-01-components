import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default FriendList;
