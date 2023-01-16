import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(frend => {
        return <FriendListItem key={frend.id} friends={frend} />;
      })}
    </ul>
  );
};
