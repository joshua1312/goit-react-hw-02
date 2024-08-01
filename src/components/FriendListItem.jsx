import css from "./FriendListItem.module.css"
import clsx from "clsx";
const FriendListItem = ({
    avatar, name, status
}) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className="textName">{name} </p>
            <p className={clsx(css.status, {
                [css.online]: status === true,
                [css.offline]: status === false
            })}>{status === true ? "Online" : "Offline"}</p>
        </div >
    );
};

export default FriendListItem;