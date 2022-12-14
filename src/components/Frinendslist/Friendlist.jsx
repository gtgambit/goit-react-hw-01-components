import PropTypes from 'prop-types';
import FriendlistItem from 'components/FriendlistItem/FriendlistItem';
import s from './Frinedlist.module.css';
const Friendslist = ({ friendlist }) => {
  return (
    <ul className={s.friendList}>
      {friendlist.map(({ isOnline, avatar, name, id }) => (
        <FriendlistItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

Friendslist.propTypes = {
  friendlist: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friendslist;
