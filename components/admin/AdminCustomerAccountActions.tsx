"use client";

import { useState } from "react";

type AccountItem = {
  id: string;
  accountType: string;
  accountNickname: string;
  maskedAccountNumber: string;
  status: string;
  availableBalanceCents?: number;
  ledgerBalanceCents?: number;
};

type AdminCustomerAccountActionsProps = {
  userId: string;
  initialAccounts: AccountItem[];
};

const accountTypes = [
  "CHECKING",
  "SAVINGS",
  "PREMIUM_CHECKING",
  "HIGH_YIELD_SAVINGS",
  "BUSINESS_CHECKING",
  "MONEY_MARKET"
];

export function AdminCustomerAccountActions({
  userId,
  initialAccounts
}: AdminCustomerAccountActionsProps) {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [accountType, setAccountType] = useState("CHECKING");
  const [accountNickname, setAccountNickname] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function createAccount() {
    setLoading(true);
    setMessage("Creating account placeholder...");

    try {
      const response = await fetch(`/api/admin/customers/${userId}/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          accountType,
          accountNickname
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Unable to create account placeholder.");
        return;
      }

      setAccounts((current) => [data.account, ...current]);
      setAccountNickname("");
      setMessage("Account placeholder created.");
    } catch {
      setMessage("Network error while creating account placeholder.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-bank-line bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
        Account Placeholder
      </h2>

      <p className="mt-2 text-sm leading-7 text-bank-steel">
        Create a safe dashboard account placeholder after customer status, KYC, and onboarding are verified.
        This does not create a real bank account or real balance.
      </p>

      <div className="mt-5 grid gap-4">
        <div>
          <label className="text-sm font-semibold text-ink-950">
            Account type
          </label>
          <select
            value={accountType}
            onChange={(event) => setAccountType(event.target.value)}
            className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
          >
            {accountTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-ink-950">
            Account nickname
          </label>
          <input
            value={accountNickname}
            onChange={(event) => setAccountNickname(event.target.value)}
            className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
            placeholder="Example: Everyday Checking"
          />
        </div>

        <button
          type="button"
          onClick={createAccount}
          disabled={loading}
          className="btn-primary h-11 w-full justify-center disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Account Placeholder"}
        </button>

        {message && (
          <div className="border border-bank-line bg-bank-mist p-3 text-sm text-bank-steel">
            {message}
          </div>
        )}

        <div className="grid gap-3">
          {accounts.length === 0 ? (
            <div className="border border-bank-line bg-bank-mist p-4 text-sm text-bank-steel">
              No account placeholders yet.
            </div>
          ) : (
            accounts.map((account) => (
              <div key={account.id} className="border border-bank-line bg-bank-mist p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink-950">
                      {account.accountNickname || account.accountType}
                    </p>
                    <p className="mt-1 text-xs text-bank-steel">
                      {account.maskedAccountNumber} • {account.accountType}
                    </p>
                  </div>

                  <span className="border border-bank-line bg-white px-3 py-1 text-xs font-semibold text-bank-blue">
                    {account.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
