"use client";

import { useState } from "react";

type AdminNote = {
  id: string;
  note: string;
  visibility: string;
  createdAt: string;
};

type AdminReviewActionsProps = {
  section: string;
  id: string;
  currentStatus: string;
  allowedStatuses: readonly string[];
  initialNotes: AdminNote[];
};

export function AdminReviewActions({
  section,
  id,
  currentStatus,
  allowedStatuses,
  initialNotes
}: AdminReviewActionsProps) {
  const [status, setStatus] = useState(currentStatus);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(initialNotes);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function updateStatus() {
    setLoading(true);
    setMessage("Updating status...");

    try {
      const response = await fetch(`/api/admin/review/${section}/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Status update failed.");
        return;
      }

      setMessage("Status updated.");
    } catch {
      setMessage("Network error while updating status.");
    } finally {
      setLoading(false);
    }
  }

  async function addNote() {
    if (!note.trim()) {
      setMessage("Enter an internal note first.");
      return;
    }

    setLoading(true);
    setMessage("Adding note...");

    try {
      const response = await fetch(`/api/admin/review/${section}/${id}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note, visibility: "INTERNAL_ONLY" })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Unable to add note.");
        return;
      }

      setNotes((current) => [data.note, ...current]);
      setNote("");
      setMessage("Internal note added.");
    } catch {
      setMessage("Network error while adding note.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="border border-bank-line bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
          Review Actions
        </h2>

        {allowedStatuses.length > 0 ? (
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-semibold text-ink-950">
                Update status
              </label>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="mt-2 h-12 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
              >
                {allowedStatuses.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={updateStatus}
              disabled={loading}
              className="btn-primary h-11 w-full justify-center disabled:opacity-60"
            >
              Save Status
            </button>
          </div>
        ) : (
          <p className="mt-3 text-sm leading-7 text-bank-steel">
            This record type is read-only and does not support status updates.
          </p>
        )}

        {message && (
          <div className="mt-4 border border-bank-line bg-bank-mist p-3 text-sm text-bank-steel">
            {message}
          </div>
        )}
      </div>

      <div className="border border-bank-line bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
          Internal Notes
        </h2>

        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={5}
          className="mt-4 w-full border border-bank-line p-3 text-sm outline-none transition focus:border-bank-blue"
          placeholder="Add internal review note..."
        />

        <button
          type="button"
          onClick={addNote}
          disabled={loading}
          className="btn-secondary mt-3 h-11 w-full justify-center disabled:opacity-60"
        >
          Add Internal Note
        </button>

        <div className="mt-5 grid gap-3">
          {notes.length === 0 ? (
            <div className="border border-bank-line bg-bank-mist p-4 text-sm text-bank-steel">
              No internal notes yet.
            </div>
          ) : (
            notes.map((item) => (
              <div key={item.id} className="border border-bank-line bg-bank-mist p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-bank-blue">
                    {item.visibility}
                  </span>
                  <span className="text-xs text-bank-steel">
                    {new Date(item.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-ink-950">
                  {item.note}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
