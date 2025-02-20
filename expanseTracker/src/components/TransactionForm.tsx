import { useState } from "react";

interface Transaction {
  amount: number;
  category: string;
  type: "income" | "expanse";
}

interface TransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  addTransaction,
}: TransactionFormProps) => {
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<"income" | "expanse">("income");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount && category) {
      addTransaction({ amount: parseFloat(amount), category, type });
      setAmount("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        style={{ margin: "5px", padding: "10px" }}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        style={{ margin: "5px", padding: "10px" }}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expanse")}
        style={{ margin: "5px", padding: "10px" }}
      >
        <option value="income">Income</option>
        <option value="expanse">Expanse</option>
      </select>
      <button
        type="submit"
        style={{
          margin: "5px",
          padding: "10px",
          backgroundColor: "skyblue",
        }}
      >
        Add Transcation
      </button>
    </form>
  );
};

export default TransactionForm;
