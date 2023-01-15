import user from 'user.json';
import { Description } from './Profile/Description/Description';
import { Stats } from './Profile/Stats/Stats';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="profile">
        <Description
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
        <Stats stats={user.stats} />
      </div>
    </div>
  );
};
