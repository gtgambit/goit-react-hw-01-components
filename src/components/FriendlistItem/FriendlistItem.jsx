import PropTypes from 'prop-types';
import s from './FriendlistItem.module.css';

const FriendlistItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.isActive : ''}`}></span>

      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendlistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendlistItem;
