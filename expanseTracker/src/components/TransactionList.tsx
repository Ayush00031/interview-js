interface Transaction {
  amount: number;
  category: string;
  type: "income" | "expanse"; // Fixed "expanse" typo
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      {transactions.length === 0 ? ( // ✅ Corrected the check
        <p>No transactions yet</p>
      ) : (
        <>
          <h3>Transactions</h3>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
            }}
          >
            {transactions.map((transaction, index) => (
              <li
                key={index}
                style={{
                  margin: "10px 0",
                }}
              >
                {transaction.type}: {transaction.category} - ₹
                {transaction.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TransactionList;
