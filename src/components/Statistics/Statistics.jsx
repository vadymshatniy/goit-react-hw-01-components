
import StatisticsItem from "../StatisticsItem/StatisticItem";


export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
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