import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import { Description } from './Profile/Description/Description';
import { Stats } from './Profile/Stats/Stats';
import { CreateStatistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
      <>
        <CreateStatistics title="Upload stats" stats={data} />
        <CreateStatistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
};
