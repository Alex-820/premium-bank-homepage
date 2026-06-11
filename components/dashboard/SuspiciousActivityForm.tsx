"use client";

import { useState } from "react";

const activityTypes = [
  "UNRECOGNIZED_LOGIN",
  "SUSPICIOUS_EMAIL",
  "UNAUTHORIZED_TRANSACTION",
  "CARD_CONCERN",
  "PROFILE_CHANGE_CONCERN",
  "OTHER"
];

const contactPreferences = ["EMAIL", "PHONE", "SECURE_MESSAGE"];

export function SuspiciousActivityForm() {
  const [activityType, setActivityType] = useState("UNRECOGNIZED_LOGIN");
  const [description, setDescription] = useState("");
  const [contactPreference, setContactPreference] = useState("EMAIL");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitReport(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Submitting security report...");

    try {
      const response = await fetch("/api/customer/security", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          activityType,
          description,
          contactPreference
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Security report could not be submitted.");
        return;
      }

      setDescription("");
      setMessage("Security report submitted for review.");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitReport} className="mt-6 space-y-5">
      <div>
        <label className="text-sm font-semibold text-ink-950">
          Activity type
        </label>
        <select
          value={activityType}
          onChange={(event) => setActivityType(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
        >
          {activityTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">
          Description
        </label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={5}
          className="mt-2 w-full border border-bank-line bg-white p-3 text-sm outline-none focus:border-bank-blue"
          placeholder="Describe what you noticed. Do not include full card numbers, passwords, SSN, or sensitive credentials."
          required
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">
          Preferred contact method
        </label>
        <select
          value={contactPreference}
          onChange={(event) => setContactPreference(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
        >
          {contactPreferences.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary h-12 w-full justify-center disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Security Report"}
      </button>

      {message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
          {message}
        </div>
      )}
    </form>
  );
}
