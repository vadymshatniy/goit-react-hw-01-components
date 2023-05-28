import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ transactions }) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <TransactionItem
                            key={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    )
                })}           
            </tbody>
        </table>
    );
};