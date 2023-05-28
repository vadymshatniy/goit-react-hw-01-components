
export default function StatisticsItem({ title, stats }) {
	return (
		<li class="item">
            <span class="label">{title}</span>
            <span class="percentage">{stats}</span>
        </li>
  	);
};