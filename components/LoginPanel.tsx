"use client";

import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function LoginPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Verifying secure access...");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Login failed.");
        return;
      }

      setMessage("Login successful. Redirecting...");
      window.location.href = "/dashboard";
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-none border border-bank-line bg-white p-6 text-ink-950 shadow-institutional">
      <div className="flex items-start justify-between gap-4 border-b border-bank-line pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Secure Access
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em]">
            Online Banking Login
          </h2>
        </div>

        <div className="grid h-11 w-11 place-items-center border border-bank-line bg-bank-mist">
          <ShieldCheck size={21} className="text-bank-blue" />
        </div>
      </div>

      <form onSubmit={submitLogin} className="mt-6 space-y-5">
        <div>
          <label htmlFor="login-panel-email" className="text-sm font-semibold">
            Email address
          </label>
          <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
            <Mail size={18} className="text-bank-steel" />
            <input
              id="login-panel-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              className="h-12 w-full bg-transparent px-3 text-sm outline-none placeholder:text-bank-steel"
              placeholder="Enter email address"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="login-panel-password" className="text-sm font-semibold">
            Password
          </label>
          <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
            <LockKeyhole size={18} className="text-bank-steel" />
            <input
              id="login-panel-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="h-12 w-full bg-transparent px-3 text-sm outline-none placeholder:text-bank-steel"
              placeholder="Enter password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary h-12 w-full justify-center disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In Securely"}
        </button>

        {message && (
          <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
            {message}
          </div>
        )}
      </form>

      <div className="mt-5 grid gap-2 border-t border-bank-line pt-5 text-sm">
        <a href="/forgot-password" className="font-semibold text-bank-blue hover:underline">
          Forgot password
        </a>
        <a href="/enroll" className="font-semibold text-bank-blue hover:underline">
          Enroll in online banking
        </a>
        <a href="/register" className="font-semibold text-bank-blue hover:underline">
          Create a customer profile
        </a>
      </div>
    </div>
  );
}
