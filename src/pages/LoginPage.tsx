import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import { login, setAuthToken, getCurrentUser } from "../services/api";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username || !password) {
      setError("Username and Password are required");
      return;
    }

    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);
      setAuthToken(data.token);

      const user = await getCurrentUser();
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <Input
          label="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <CustomButton onClick={handleSubmit}>Login</CustomButton>
      </div>
    </div>
  );
};

export default LoginPage;
