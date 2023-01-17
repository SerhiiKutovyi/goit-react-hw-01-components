import css from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  const { isOnline, avatar, name, id } = friends;
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.status : css.status + ' ' + css.red}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
