import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((prop) => (

                    <tr className={css.tableRecord} key={prop.id}>
                        <td>{prop.type}</td>
                        <td>{prop.amount}</td>
                        <td>{prop.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;