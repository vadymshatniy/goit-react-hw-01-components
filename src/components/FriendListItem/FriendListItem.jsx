import friendListItemStyles from "./FriendListItem.module.css";

export default function FriendsListItem({ avatar, name, isOnline }) {
      return (
            <li className={friendListItemStyles.item} >
                  <span className={isOnline ? friendListItemStyles.statusOn : friendListItemStyles.statusOff }>{isOnline}</span>
                  <img className={friendListItemStyles.avatar} src={avatar} alt="User avatar" width="48" />
                  <p className={friendListItemStyles.name}>{name}</p>
</li>
  	);
};

