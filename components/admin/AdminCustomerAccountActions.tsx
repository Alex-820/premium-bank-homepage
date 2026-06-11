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

type TransactionItem = {
  id: string;
  transactionType: string;
  direction: string;
  amount: number;
  currency: string;
  status: string;
  description: string;
  reference: string;
  createdAt: string;
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

const transactionTypes = [
  "DEPOSIT",
  "WITHDRAWAL",
  "TRANSFER",
  "CARD_PAYMENT",
  "BILL_PAYMENT",
  "LOAN_PAYMENT",
  "INTEREST",
  "FEE",
  "REFUND",
  "ADJUSTMENT"
];

export function AdminCustomerAccountActions({
  userId,
  initialAccounts
}: AdminCustomerAccountActionsProps) {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [accountType, setAccountType] = useState("CHECKING");
  const [accountNickname, setAccountNickname] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(initialAccounts[0]?.id || "");
  const [transactionType, setTransactionType] = useState("DEPOSIT");
  const [direction, setDirection] = useState("CREDIT");
  const [amount, setAmount] = useState("25.00");
  const [description, setDescription] = useState("Placeholder account activity");
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
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
      setSelectedAccountId(data.account.id);
      setAccountNickname("");
      setMessage("Account placeholder created.");
    } catch {
      setMessage("Network error while creating account placeholder.");
    } finally {
      setLoading(false);
    }
  }

  async function createTransaction() {
    if (!selectedAccountId) {
      setMessage("Create or select an account placeholder first.");
      return;
    }

    setLoading(true);
    setMessage("Creating transaction placeholder...");

    try {
      const response = await fetch(`/api/admin/accounts/${selectedAccountId}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          transactionType,
          direction,
          amount,
          status: "POSTED",
          description
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Unable to create transaction placeholder.");
        return;
      }

      setTransactions((current) => [data.transaction, ...current]);
      setMessage("Transaction placeholder created.");
    } catch {
      setMessage("Network error while creating transaction placeholder.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
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

      <div className="border border-bank-line bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink-950">
          Transaction Placeholder
        </h2>

        <p className="mt-2 text-sm leading-7 text-bank-steel">
          Add safe transaction-history records for dashboard testing. This does not move money,
          settle funds, connect to payment rails, or change the account balance.
        </p>

        <div className="mt-5 grid gap-4">
          <div>
            <label className="text-sm font-semibold text-ink-950">
              Account
            </label>
            <select
              value={selectedAccountId}
              onChange={(event) => setSelectedAccountId(event.target.value)}
              className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
            >
              <option value="" disabled>
                Select account
              </option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.accountNickname || account.accountType} — {account.maskedAccountNumber}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-ink-950">
                Transaction type
              </label>
              <select
                value={transactionType}
                onChange={(event) => setTransactionType(event.target.value)}
                className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
              >
                {transactionTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-ink-950">
                Direction
              </label>
              <select
                value={direction}
                onChange={(event) => setDirection(event.target.value)}
                className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
              >
                <option value="CREDIT">CREDIT</option>
                <option value="DEBIT">DEBIT</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-ink-950">
              Amount
            </label>
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
              placeholder="25.00"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-ink-950">
              Description
            </label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="mt-2 h-11 w-full border border-bank-line bg-white px-3 text-sm outline-none transition focus:border-bank-blue"
              placeholder="Placeholder account activity"
            />
          </div>

          <button
            type="button"
            onClick={createTransaction}
            disabled={loading}
            className="btn-secondary h-11 w-full justify-center disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Transaction Placeholder"}
          </button>

          {message && (
            <div className="border border-bank-line bg-bank-mist p-3 text-sm text-bank-steel">
              {message}
            </div>
          )}

          <div className="grid gap-3">
            {transactions.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-4 text-sm text-bank-steel">
                New transaction placeholders will appear here after creation.
              </div>
            ) : (
              transactions.map((transaction) => (
                <div key={transaction.id} className="border border-bank-line bg-bank-mist p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-ink-950">
                        {transaction.description}
                      </p>
                      <p className="mt-1 text-xs text-bank-steel">
                        {transaction.transactionType} • {transaction.reference}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-ink-950">
                        {transaction.direction === "CREDIT" ? "+" : "-"}${transaction.amount.toFixed(2)}
                      </p>
                      <p className="mt-1 text-xs text-bank-steel">
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border border-bank-gold/40 bg-[#fff8e8] p-4">
            <p className="text-xs leading-6 text-ink-900">
              Compliance note: these are prototype transaction records only. They are not deposits,
              withdrawals, card payments, ACH transfers, wire transfers, or real ledger entries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
