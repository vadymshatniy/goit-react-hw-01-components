import statisticItemStyles from "./StatisticItem.module.css";

export default function StatisticsItem({ title, stats }) {
      return (
            <li className={statisticItemStyles.item}>
            <span className={statisticItemStyles.label}>{title}</span>
            <span className={statisticItemStyles.percentage}>{stats}%</span>
        </li>
  	);
};

