"use client";

import { useState } from "react";

const requestTypes = [
  "LOCK_CARD",
  "UNLOCK_CARD",
  "TRAVEL_NOTICE",
  "SPENDING_LIMIT_CHANGE",
  "REPLACEMENT_CARD"
];

export function CardControlRequestForm() {
  const [requestType, setRequestType] = useState("LOCK_CARD");
  const [cardLabel, setCardLabel] = useState("Everyday Debit Card");
  const [maskedCardNumber, setMaskedCardNumber] = useState("•••• 1234");
  const [travelDestination, setTravelDestination] = useState("");
  const [travelStartDate, setTravelStartDate] = useState("");
  const [travelEndDate, setTravelEndDate] = useState("");
  const [requestedLimit, setRequestedLimit] = useState("");
  const [replacementReason, setReplacementReason] = useState("");
  const [memo, setMemo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitCardControl(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("Submitting card control request...");

    try {
      const response = await fetch("/api/customer/card-controls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          requestType,
          cardLabel,
          maskedCardNumber,
          travelDestination,
          travelStartDate,
          travelEndDate,
          requestedLimit,
          replacementReason,
          memo
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Card control request could not be submitted.");
        return;
      }

      setMessage("Card control request submitted for review.");
      setMemo("");
      setTravelDestination("");
      setTravelStartDate("");
      setTravelEndDate("");
      setRequestedLimit("");
      setReplacementReason("");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitCardControl} className="mt-6 space-y-5">
      <div>
        <label className="text-sm font-semibold text-ink-950">Request type</label>
        <select
          value={requestType}
          onChange={(event) => setRequestType(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
        >
          {requestTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Card label</label>
        <input
          value={cardLabel}
          onChange={(event) => setCardLabel(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="Everyday Debit Card"
          required
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-950">Masked card number</label>
        <input
          value={maskedCardNumber}
          onChange={(event) => setMaskedCardNumber(event.target.value)}
          className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
          placeholder="•••• 1234"
        />
      </div>

      {requestType === "TRAVEL_NOTICE" && (
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-sm font-semibold text-ink-950">Destination</label>
            <input
              value={travelDestination}
              onChange={(event) => setTravelDestination(event.target.value)}
              className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
              placeholder="London, UK"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-ink-950">Start date</label>
            <input
              type="date"
              value={travelStartDate}
              onChange={(event) => setTravelStartDate(event.target.value)}
              className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-ink-950">End date</label>
            <input
              type="date"
              value={travelEndDate}
              onChange={(event) => setTravelEndDate(event.target.value)}
              className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
            />
          </div>
        </div>
      )}

      {requestType === "SPENDING_LIMIT_CHANGE" && (
        <div>
          <label className="text-sm font-semibold text-ink-950">Requested limit</label>
          <input
            value={requestedLimit}
            onChange={(event) => setRequestedLimit(event.target.value)}
            className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
            placeholder="500.00"
          />
        </div>
      )}

      {requestType === "REPLACEMENT_CARD" && (
        <div>
          <label className="text-sm font-semibold text-ink-950">Replacement reason</label>
          <input
            value={replacementReason}
            onChange={(event) => setReplacementReason(event.target.value)}
            className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none focus:border-bank-blue"
            placeholder="Damaged, lost, stolen, expired, or other"
          />
        </div>
      )}

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
        disabled={loading}
        className="btn-primary h-12 w-full justify-center disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Card Control Request"}
      </button>

      {message && (
        <div className="border border-bank-line bg-bank-mist p-4 text-sm leading-6 text-bank-steel">
          {message}
        </div>
      )}
    </form>
  );
}
