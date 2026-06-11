"use client";

import { useState } from "react";

type AccountOption = {
  id: string;
  label: string;
};

export function TransferRequestForm({ accounts }: { accounts: AccountOption[] }) {
  const [sourceAccountId, setSourceAccountId] = useState(accounts[0]?.id || "");
  const [transferType, setTransferType] = useState("INTERNAL");
  const [recipientName, setRecipientName] = useState("");
  const [recipientReference, setRecipientReference] = useState("");
  const [amount, setAmount] = useState("25.00");
  const [memo, setMemo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitTransfer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Submitting transfer request...");

    try {
      const response = await fetch("/api/customer/transfers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sourceAccountId,
          transferType,
          recipientName,
          recipientReference,
          amount,
          memo
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Transfer request could not be submitted.");
        return;
      }

      setRecipientName("");
      setRecipientReference("");
      setMemo("");
      setMessage("Transfer request submitted for review.");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitTransfer} className="mt-6 space-y-5">
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
        <label className="text-sm font-semibold text-ink-950">Transfer type</label>
        <select
          value={transferType}
          onChange={(event) => setTransferType(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
        >
          <option value="INTERNAL">INTERNAL</option>
          <option value="EXTERNAL">EXTERNAL</option>
          <option value="WIRE">WIRE</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Recipient name</label>
        <input
          value={recipientName}
          onChange={(event) => setRecipientName(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="Recipient name"
          required
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Recipient reference</label>
        <input
          value={recipientReference}
          onChange={(event) => setRecipientReference(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="Account nickname or reference"
        />
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
        {loading ? "Submitting..." : "Submit Transfer Request"}
      </button>

      {message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
          {message}
        </div>
      )}
    </form>
  );
}
