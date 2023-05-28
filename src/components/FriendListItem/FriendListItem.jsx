import friendListItemStyles from "./FriendListItem.module.css";

export default function FriendsListItem({ avatar, name, isOnline }) {
      return (
            <li class={friendListItemStyles.item} >
            <span class="status">{isOnline}</span>
                  <img class={friendListItemStyles.avatar} src={avatar} alt="User avatar" width="48" />
                  <p class={friendListItemStyles.name}>{name}</p>
</li>
  	);
};