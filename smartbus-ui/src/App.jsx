import { useState } from "react";
import "./App.css";

function App() {
  const [tracking, setTracking] = useState(false);

  const handleLogin = () => {
    setTracking(true);
  };

  if (loggedIn) {
    return (
      <div className="app">
        <div className="card">
          <div className="bus-icon">🚌</div>

          <h1>SmartBus</h1>

          <div className="login-box">
            <h2>Welcome to SmartBus 🎉</h2>

            <p>Your bus tracking dashboard</p>

            <button onClick={handleTracking}>
              📍 Track My Bus
            </button>

            <button
              onClick={() => setLoggedIn(false)}
              style={{
                marginTop: "12px",
                background: "#64748b",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">
        <div className="bus-icon">🚌</div>

        <h1>SmartBus</h1>

        <p className="tagline">
          Know your bus. Save your time.
        </p>

        <div className="login-box">
          <h2>Welcome Back 👋</h2>

          <p>Track your college bus easily</p>

          <input
            type="text"
            placeholder="Student ID / Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <p className="forgot">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

export default App;