import PropTypes from 'prop-types';
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

Profile.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
