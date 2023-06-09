import PropTypes from "prop-types";
import StatisticsItem from "../StatisticItem/StatisticItem";
import statisticsStyles from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
    return (
        <section className={statisticsStyles.statistics}>
            {title && <h2 className={statisticsStyles.title}>{title}</h2>}

            <ul className={statisticsStyles.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsItem
                            key={id}
                            title={label}
                            stats={percentage}
                        />
                    )
                })}
            </ul>
        </section>
	);
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.object,
};

