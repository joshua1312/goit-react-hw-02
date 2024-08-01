import FriendListItem from "./FriendListItem.jsx";
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendsList}>{friends.map((friend_n) => (
            <li key={friend_n.id} className={css.friendsItem}>
                <FriendListItem
                    avatar={friend_n.avatar}
                    name={friend_n.name}
                    status={friend_n.isOnline} />
            </li>
        ))}
        </ul>
    )
}
export default FriendList;
