import statisticItemStyles from "./StatisticItem.module.css";

export default function StatisticsItem({ title, stats }) {
      return (
            <li class={statisticItemStyles.item}>
            <span class={statisticItemStyles.label}>{title}</span>
            <span class={statisticItemStyles.percentage}>{stats}%</span>
        </li>
  	);
};

// повторно, у зв'язку з помилкою на githab