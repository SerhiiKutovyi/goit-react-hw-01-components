import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.general}>
          <th className={css.name}>Type</th>
          <th className={css.name}>Amount</th>
          <th className={css.name}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr className={css.type}>
              <td className={css.amount}>{type}</td>
              <td className={css.amount}>{amount}</td>
              <td className={css.amount}>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
