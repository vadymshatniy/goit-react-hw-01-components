import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
                {friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                        <FriendListItem
                            key={id}
                            isOnline={isOnline}
                            avatar={avatar}
                            name={name}
                        />
                    )
                })}
            </ul>
    );
};

FriendList.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

