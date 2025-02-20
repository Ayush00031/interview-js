import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";

interface Transaction {
  amount: number;
  category: string;
  type: "income" | "expanse";
}
const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div>
      <h1
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          color: "navy",
        }}
      >
        Expanse Tracker
      </h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <Summary transactions={transactions} />
    </div>
  );
};

export default App;
