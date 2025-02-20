import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be at least 8 characters long");
      setUserColor("red");
    }
    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email must contain @gmail.com");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters long");
      setPasswordColor("red");
    }
    if (password != "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Password does not match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Enter your username "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ borderColor: userColor }}
        />
        <p>{errorUserName}</p>
        <input
          type="email"
          placeholder="Enter your email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: emailColor }}
        />
        <p>{errorEmail}</p>
        <input
          type="password"
          placeholder="Enter your password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: passwordColor }}
        />
        <p>{errorPassword}</p>
        <input
          type="password"
          placeholder="Confirm your password "
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ borderColor: confirmPasswordColor }}
        />
        <p>{errorConfirmPassword}</p>
        <button onClick={validate}>Submit</button>
      </form>
    </section>
  );
};

export default Form;
