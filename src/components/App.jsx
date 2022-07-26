import Section from '../components/Section/Section';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import Transaction from './Transaction/Transaction';
import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
const App = () => {
  return (
    <div>
      <Section title={'1 - Профіль соціальної мережі'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={'2- Секція статистики'}>
        <Statistics title="Upload stats" stats={stats} />
      </Section>

      <Section>
        <Statistics stats={stats} />
      </Section>

      <Section title={'3 - Список друзів'}>
        <FriendList friends={friends} />
      </Section>

      <Section title={'4 - Історія транзакцій'}>
        <Transaction transactions={transactions} />
      </Section>
    </div>
  );
};

export default App;
