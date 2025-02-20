import { useState } from "react";

const ShoppingList = () => {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) {
      return;
    }
    const newItems = {
      name,
      quantity: parseInt(quantity),
    };
    setItem((prevItem) => [...prevItem, newItems]);
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item:
          <input
            type="text"
            name="name"
            placeholder="name of item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="number"
            name="quantity"
            placeholder="add quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      Shopping list are:
      <ul>
        {item.map((e, index) => (
          <li key={index}>
            {e.name} - Quantity:{e.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
