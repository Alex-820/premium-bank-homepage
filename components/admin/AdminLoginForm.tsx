"use client";

import { LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

export function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Verifying admin credentials...");

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Admin login failed.");
        return;
      }

      setMessage("Login successful. Redirecting...");
      window.location.href = "/admin";
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitLogin} className="mt-6 space-y-5">
      <div>
        <label htmlFor="admin-email" className="text-sm font-semibold text-ink-950">
          Admin email
        </label>
        <div className="mt-2 flex items-center border border-bank-line px-3 transition focus-within:border-bank-blue">
          <Mail size={18} className="text-bank-steel" />
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-12 w-full bg-transparent px-3 text-sm outline-none"
            placeholder="admin@asterbank.dev"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="admin-password" className="text-sm font-semibold text-ink-950">
          Admin password
        </label>
        <div className="mt-2 flex items-center border border-bank-line px-3 transition focus-within:border-bank-blue">
          <LockKeyhole size={18} className="text-bank-steel" />
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="h-12 w-full bg-transparent px-3 text-sm outline-none"
            placeholder="Enter admin password"
            required
          />
        </div>
      </div>

      <button type="submit" disabled={loading} className="btn-primary h-12 w-full justify-center disabled:opacity-60">
        {loading ? "Signing in..." : "Sign In to Admin"}
      </button>

      {message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
          {message}
        </div>
      )}
    </form>
  );
}
