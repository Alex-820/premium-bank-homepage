import { LockKeyhole, ShieldCheck } from "lucide-react";

export function LoginPanel() {
  return (
    <aside id="login" className="w-full border border-white/15 bg-white p-5 text-ink-950 shadow-institutional sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4 border-b border-bank-line pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">Secure Access</p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em]">Online Banking Login</h2>
        </div>
        <span className="grid h-11 w-11 place-items-center bg-bank-mist text-bank-blue">
          <LockKeyhole size={21} />
        </span>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="text-sm font-semibold text-ink-900">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            className="mt-2 w-full border border-bank-line bg-white px-4 py-3 text-sm outline-none transition placeholder:text-bank-steel/65 focus:border-bank-blue focus:ring-4 focus:ring-bank-blue/10"
            placeholder="Enter username"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-semibold text-ink-900">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="mt-2 w-full border border-bank-line bg-white px-4 py-3 text-sm outline-none transition placeholder:text-bank-steel/65 focus:border-bank-blue focus:ring-4 focus:ring-bank-blue/10"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn-primary h-12 w-full justify-center">
          Log In
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <a href="/forgot-password" className="font-semibold text-bank-blue hover:underline">
          Forgot username/password
        </a>
        <a href="/enroll" className="font-semibold text-bank-blue hover:underline">
          Enroll in online banking
        </a>
      </div>

      <div className="mt-5 flex gap-3 border-t border-bank-line pt-4 text-xs leading-5 text-bank-steel">
        <ShieldCheck className="mt-0.5 shrink-0 text-bank-blue" size={17} />
        <p>
          We will never ask for your full password by email, phone, or text. Use the Security Center to review current fraud alerts.
        </p>
      </div>
    </aside>
  );
}
