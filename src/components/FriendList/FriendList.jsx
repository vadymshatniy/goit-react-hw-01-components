import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
    return (
        <ul class="friend-list">
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