/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion2 = ({ title, content }) => {
  const [isActive, setIsACtive] = useState(false);

  return (
    <section onClick={() => setIsACtive(!isActive)}>
      <div>{title}</div>
      <p>{isActive ? "-" : "+"}</p>
      <div>{isActive && <p>{content}</p>}</div>
    </section>
  );
};

export default Accordion2;
