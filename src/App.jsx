import Profile from "./components/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import FriendList from "./components/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";
// import './App.css'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
