export const FriendListItem = ({ friends }) => {
  const { isOnline, avatar, name, id } = friends;
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
