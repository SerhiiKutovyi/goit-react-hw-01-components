export const FriendListItem = ({ friends }) => {
  const { isOnline, avatar, name } = friends;
  {
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>;
  }
};
