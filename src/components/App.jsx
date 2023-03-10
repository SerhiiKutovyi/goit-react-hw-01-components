import user from 'Json/user.json';
import data from 'Json/data.json';
import friends from 'Json/friends.json';
import transactions from 'Json/transactions.json';

import { Profile } from './Profile/Profile';
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
      <>
        <Profile user={user} />
        <CreateStatistics title="Upload stats" stats={data} />
        <CreateStatistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
};
