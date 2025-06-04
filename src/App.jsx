import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulazione fallimento login
    setError("❌ Errore: autenticazione fallita (codice 42).");
  };

  return (
    <form onSubmit={handleLogin} className="p-6">
      <h1 className="text-xl font-bold mb-4">Login a Vinted</h1>

      {error && (
        <div className="mb-4 text-red-600 font-semibold">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Accedi
      </button>
    </form>
  );
}
