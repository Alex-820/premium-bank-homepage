"use client";

import { LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { useState } from "react";

export function CustomerRegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Creating secure customer profile...");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Registration failed.");
        return;
      }

      setMessage("Registration created. Redirecting to secure login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 900);
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitRegister} className="mt-6 space-y-5">
      <div>
        <label htmlFor="register-full-name" className="text-sm font-semibold text-ink-950">
          Full name
        </label>
        <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
          <UserRound size={18} className="text-bank-steel" />
          <input
            id="register-full-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            autoComplete="name"
            className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
            placeholder="Enter full name"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="register-email" className="text-sm font-semibold text-ink-950">
          Email address
        </label>
        <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
          <Mail size={18} className="text-bank-steel" />
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
            placeholder="name@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="register-phone" className="text-sm font-semibold text-ink-950">
          Phone number
        </label>
        <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
          <Phone size={18} className="text-bank-steel" />
          <input
            id="register-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
            placeholder="Phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="register-password" className="text-sm font-semibold text-ink-950">
          Password
        </label>
        <div className="mt-2 flex items-center border border-bank-line bg-white px-3 transition focus-within:border-bank-blue">
          <LockKeyhole size={18} className="text-bank-steel" />
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            className="h-12 w-full bg-transparent px-3 text-sm text-ink-950 outline-none placeholder:text-bank-steel"
            placeholder="Minimum 8 characters"
            required
          />
        </div>
        <p className="mt-2 text-xs leading-6 text-bank-steel">
          Use a strong password. Production registration will later include email verification,
          device review, rate limiting, and additional security controls.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary h-12 w-full justify-center disabled:opacity-60"
      >
        {loading ? "Creating profile..." : "Create Customer Profile"}
      </button>

      {message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
          {message}
        </div>
      )}
    </form>
  );
}
