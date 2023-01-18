import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  const { isOnline, avatar, name } = friends;
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status : css.status + ' ' + css.red}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
