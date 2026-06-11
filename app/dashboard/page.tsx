import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { CustomerProfile } from "@/models/CustomerProfile";
import { User } from "@/models/User";
import { FileText, ShieldCheck, UserRound, WalletCards } from "lucide-react";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function moneyFromCents(value: number) {
  return `$${(value / 100).toFixed(2)}`;
}

async function getDashboardData(userId: string) {
  await connectDB();

  const user = await User.findById(userId).lean();

  if (!user) return null;

  let profile = await CustomerProfile.findOne({ userId }).lean();

  if (!profile) {
    const created = await CustomerProfile.create({
      userId,
      customerNumber: `CUST-${nanoid(10).toUpperCase()}`,
      relationshipType: "PERSONAL",
      onboardingStatus: "PROFILE_CREATED",
      kycStatus: "NOT_STARTED"
    });

    profile = created.toObject();
  }

  const accounts = await BankAccount.find({ userId }).sort({ createdAt: -1 }).lean();

  return {
    user,
    profile,
    accounts
  };
}

export default async function DashboardPage() {
  const session = await getCustomerSession();

  if (!session) {
    redirect("/login");
  }

  const data = await getDashboardData(session.userId);

  if (!data) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Customer Dashboard
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-6xl">
            Welcome, {data.user.fullName}.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-bank-steel">
            Your secure dashboard is now connected to MongoDB. This is the foundation
            for customer profiles, accounts, transactions, transfers, cards, alerts,
            and support workflows.
          </p>

          <form action="/api/auth/logout" method="post" className="mt-8">
            <button type="submit" className="btn-secondary h-11 px-5">
              Sign Out
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <UserRound className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Customer Number
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.customerNumber}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              KYC Status
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.kycStatus}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <FileText className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Onboarding
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.profile.onboardingStatus}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <WalletCards className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Accounts
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-950">
              {data.accounts.length}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Accounts
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Real account creation requires regulated banking infrastructure. This section
              is ready for approved account records and masked account display.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {data.accounts.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5">
                <p className="text-sm font-semibold text-ink-950">
                  No active accounts yet.
                </p>
                <p className="mt-2 text-sm leading-7 text-bank-steel">
                  Account records will appear here after account opening review,
                  approval, and regulated core banking integration.
                </p>
                <a href="/open-account" className="mt-4 inline-flex text-sm font-semibold text-bank-blue">
                  Start account request →
                </a>
              </div>
            ) : (
              data.accounts.map((account) => (
                <div key={String(account._id)} className="border border-bank-line bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-ink-950">
                        {account.accountNickname || account.accountType}
                      </p>
                      <p className="mt-1 text-xs text-bank-steel">
                        {account.maskedAccountNumber} • {account.status}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-bank-steel">Available</p>
                      <p className="mt-1 text-lg font-semibold text-ink-950">
                        {moneyFromCents(account.availableBalanceCents || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Profile Summary
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Customer profile data is now read from MongoDB.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {[
              ["Full Name", data.user.fullName],
              ["Email", data.user.email],
              ["Phone", data.user.phone || "—"],
              ["User Status", data.user.status],
              ["Relationship Type", data.profile.relationshipType],
              ["Risk Tier", data.profile.riskTier],
              ["Address Status", data.profile.addressStatus]
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[150px_1fr] gap-4 border border-bank-line bg-bank-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bank-steel">
                  {label}
                </p>
                <p className="text-sm font-semibold text-ink-950">{String(value)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
