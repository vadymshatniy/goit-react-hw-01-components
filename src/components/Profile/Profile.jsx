import PropTypes from "prop-types";
import profileStyles from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={profileStyles.profile}>
            <div className={profileStyles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={profileStyles.avatar}
                />
                <p className={profileStyles.name}>{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={profileStyles.stats}>
                <li className={profileStyles.statsItem}>
                    <span className={profileStyles.label}>Followers</span>
                    <span className={profileStyles.quantity}>{stats.followers}</span>
                </li>
                <li className={profileStyles.statsItem}>
                    <span className={profileStyles.label}>Views</span>
                    <span className={profileStyles.quantity}>{stats.views}</span>
                </li>
                <li className={profileStyles.statsItem}>
                    <span className={profileStyles.label}>Likes</span>
                    <span className={profileStyles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};