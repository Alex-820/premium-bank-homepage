"use client";

import { useState } from "react";

type AccountOption = {
  id: string;
  label: string;
};

const categories = ["UTILITIES", "INSURANCE", "CREDIT_CARD", "LOAN", "RENT", "SUBSCRIPTION", "OTHER"];

export function BillPayRequestForm({ accounts }: { accounts: AccountOption[] }) {
  const [sourceAccountId, setSourceAccountId] = useState(accounts[0]?.id || "");
  const [payeeName, setPayeeName] = useState("");
  const [payeeCategory, setPayeeCategory] = useState("OTHER");
  const [amount, setAmount] = useState("25.00");
  const [memo, setMemo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitBillPay(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Submitting bill-pay request...");

    try {
      const response = await fetch("/api/customer/bill-pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sourceAccountId,
          payeeName,
          payeeCategory,
          amount,
          memo
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Bill-pay request could not be submitted.");
        return;
      }

      setPayeeName("");
      setMemo("");
      setMessage("Bill-pay request submitted for review.");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitBillPay} className="mt-6 space-y-5">
      <div>
        <label className="text-sm font-semibold text-ink-950">Source account</label>
        <select
          value={sourceAccountId}
          onChange={(event) => setSourceAccountId(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          required
        >
          {accounts.length === 0 ? (
            <option value="">No active account placeholders</option>
          ) : (
            accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.label}
              </option>
            ))
          )}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Payee name</label>
        <input
          value={payeeName}
          onChange={(event) => setPayeeName(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="Payee or biller name"
          required
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Payee category</label>
        <select
          value={payeeCategory}
          onChange={(event) => setPayeeCategory(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Amount</label>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="25.00"
          required
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Memo</label>
        <input
          value={memo}
          onChange={(event) => setMemo(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="Optional memo"
        />
      </div>

      <button
        type="submit"
        disabled={loading || accounts.length === 0}
        className="btn-primary h-12 w-full justify-center disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Bill-Pay Request"}
      </button>

      {message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
          {message}
        </div>
      )}
    </form>
  );
}
