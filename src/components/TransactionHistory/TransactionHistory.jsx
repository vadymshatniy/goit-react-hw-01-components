import PropTypes from "prop-types";
import TransactionItem from "../TransactionItem/TransactionItem";
import TransactionHistoryStyles from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
    return (
        <table class={TransactionHistoryStyles.transactionHistory}>
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

TransactionHistory.propTypes = {
    transactions: PropTypes.object,
};