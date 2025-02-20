/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsACtive] = useState(false);
  return (
    <section key={Math.random()}>
      <div onClick={() => setIsACtive(!isActive)}>
        {title}
        <p>{isActive ? "-" : "+"}</p>
      </div>
      <div>{isActive && <p>{content}</p>}</div>
    </section>
  );
};
export default Accordion;
