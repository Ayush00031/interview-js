interface Transaction {
  amount: number;
  category: string;
  type: "income" | "expanse";
}

interface SummaryProps {
  transactions: Transaction[];
}

const Summary: React.FC<SummaryProps> = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expanse = transactions
    .filter((t) => t.type === "expanse")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expanse;

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ${income.toFixed(2)}</p>
      <p>Total Expnase: ${expanse.toFixed(2)}</p>
      <p>Total Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
