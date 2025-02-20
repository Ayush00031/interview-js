import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("hey this is me");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
