import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { requireAdminSession } from "@/lib/adminSession";
import { connectDB } from "@/lib/db";
import { BankAccount } from "@/models/BankAccount";
import { CustomerProfile } from "@/models/CustomerProfile";
import { User } from "@/models/User";
import { ArrowLeft, ShieldCheck, UserRound, WalletCards } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Customer Management | Aster Bank",
  description: "Admin customer management for registered banking customers and customer profiles."
};

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

async function getCustomerData() {
  await connectDB();

  const users = await User.find()
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  const userIds = users.map((user) => String(user._id));

  const [profiles, accountCounts] = await Promise.all([
    CustomerProfile.find({ userId: { $in: userIds } }).lean(),
    BankAccount.aggregate([
      { $match: { userId: { $in: users.map((user) => user._id) } } },
      { $group: { _id: "$userId", count: { $sum: 1 } } }
    ])
  ]);

  const profileMap = new Map(
    profiles.map((profile: any) => [String(profile.userId), profile])
  );

  const accountCountMap = new Map(
    accountCounts.map((item: any) => [String(item._id), item.count])
  );

  return users.map((user: any) => {
    const profile = profileMap.get(String(user._id));

    return {
      id: String(user._id),
      fullName: user.fullName,
      email: user.email,
      phone: user.phone || "—",
      role: user.role,
      status: user.status,
      emailVerified: Boolean(user.emailVerified),
      customerNumber: profile?.customerNumber || "Not created",
      onboardingStatus: profile?.onboardingStatus || "No profile",
      kycStatus: profile?.kycStatus || "No profile",
      riskTier: profile?.riskTier || "UNASSIGNED",
      accountCount: accountCountMap.get(String(user._id)) || 0,
      createdAt: formatDate(user.createdAt),
      lastLoginAt: formatDate(user.lastLoginAt)
    };
  });
}

export default async function AdminCustomersPage() {
  await requireAdminSession();

  const customers = await getCustomerData();

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a
            href="/admin"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bank-goldSoft"
          >
            <ArrowLeft size={16} /> Back to admin dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-goldSoft">
            Customer Operations
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Customer management and profile review.
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65">
            Review registered customers, onboarding status, KYC status, risk tier,
            account placeholders, and customer profile records from MongoDB.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <UserRound className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Registered Customers
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {customers.length}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <ShieldCheck className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Pending Verification
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {customers.filter((customer) => customer.status === "PENDING_VERIFICATION").length}
            </p>
          </div>

          <div className="border border-bank-line bg-white p-5 shadow-sm">
            <WalletCards className="text-bank-blue" size={22} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-bank-steel">
              Account Records
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-ink-950">
              {customers.reduce((total, customer) => total + customer.accountCount, 0)}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <div className="border-b border-bank-line pb-5">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
              Customers
            </h2>
            <p className="mt-2 text-sm leading-6 text-bank-steel">
              Click a customer to review full customer details and update customer status.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {customers.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5 text-sm text-bank-steel">
                No registered customers yet.
              </div>
            ) : (
              customers.map((customer) => (
                <a
                  key={customer.id}
                  href={`/admin/customers/${customer.id}`}
                  className="grid gap-4 border border-bank-line bg-white p-5 transition hover:border-bank-blue hover:bg-bank-mist lg:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="text-base font-semibold text-ink-950">
                      {customer.fullName}
                    </p>

                    <p className="mt-1 text-sm text-bank-steel">
                      {customer.email} • {customer.phone}
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                          Customer No.
                        </p>
                        <p className="mt-1 text-xs font-semibold text-ink-950">
                          {customer.customerNumber}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                          KYC
                        </p>
                        <p className="mt-1 text-xs font-semibold text-ink-950">
                          {customer.kycStatus}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                          Onboarding
                        </p>
                        <p className="mt-1 text-xs font-semibold text-ink-950">
                          {customer.onboardingStatus}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-bank-steel">
                          Accounts
                        </p>
                        <p className="mt-1 text-xs font-semibold text-ink-950">
                          {customer.accountCount}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <span className="inline-flex border border-bank-line bg-bank-mist px-3 py-1 text-xs font-semibold text-bank-blue">
                      {customer.status}
                    </span>
                    <p className="mt-2 text-xs text-bank-steel">
                      Created {customer.createdAt}
                    </p>
                    <p className="mt-1 text-xs text-bank-steel">
                      Last login {customer.lastLoginAt}
                    </p>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
