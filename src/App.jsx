import userData from './jsons/user';
import statisticData from './jsons/data';
import friendsData from './jsons/friends';
import transactionsData from './jsons/transactions';

import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import Friendslist from './components/Frinendslist/Friendlist';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile profile={userData}></Profile>
      <Statistic title="Upload stats" statistic={statisticData} />
      <Statistic statistic={statisticData}></Statistic>
      <Friendslist friendlist={friendsData}></Friendslist>
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
};
