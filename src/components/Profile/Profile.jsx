import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';

export const Profile = ({ user }) => {
  return (
    <div className="profile">
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
};
