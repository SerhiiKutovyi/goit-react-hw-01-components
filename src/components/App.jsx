import user from 'user.json';
import data from 'data.json';
import { Description } from './Profile/Description/Description';
import { Stats } from './Profile/Stats/Stats';
import { CreateTitle } from './Statistics/Title/Title';
import { CreateStatistics } from './Statistics/StatList/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
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
      <section className="statistics">
        <CreateTitle />
        <CreateStatistics label={data.label} percentage={data.percentage} />
      </section>
    </div>
  );
};
