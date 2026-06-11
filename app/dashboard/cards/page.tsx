import { CardControlRequestForm } from "@/components/dashboard/CardControlRequestForm";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { getCustomerSession } from "@/lib/customerSession";
import { connectDB } from "@/lib/db";
import { CardControlRequest } from "@/models/CardControlRequest";
import { ArrowLeft, CreditCard } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function formatDate(value: unknown) {
  if (!value) return "—";
  return new Date(String(value)).toLocaleString();
}

export default async function CardsPage() {
  const session = await getCustomerSession();

  if (!session) redirect("/login");

  await connectDB();

  const cardControls = await CardControlRequest.find({ userId: session.userId })
    .sort({ createdAt: -1 })
    .limit(25)
    .lean();

  return (
    <main className="min-h-screen bg-white text-ink-950">
      <TopUtilityBar />
      <MainNav />

      <section className="border-b border-bank-line bg-bank-mist">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <a href="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-bank-blue">
            <ArrowLeft size={16} /> Back to dashboard
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bank-gold">
            Card Controls
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl">
            Submit card control requests for review.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-bank-steel">
            This prototype captures card control requests only. It does not lock real cards,
            issue cards, replace cards, approve limits, or connect to a card processor.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <CreditCard className="text-bank-blue" size={22} />
          <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink-950">
            New Card Control Request
          </h2>
          <p className="mt-2 text-sm leading-7 text-bank-steel">
            Requests are submitted for internal review and audit logging.
          </p>

          <CardControlRequestForm />
        </div>

        <div className="border border-bank-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink-950">
            Recent Card Control Requests
          </h2>

          <div className="mt-5 grid gap-3">
            {cardControls.length === 0 ? (
              <div className="border border-bank-line bg-bank-mist p-5 text-sm text-bank-steel">
                No card control requests yet.
              </div>
            ) : (
              cardControls.map((item: any) => (
                <div key={String(item._id)} className="grid gap-3 border border-bank-line bg-white p-5 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-sm font-semibold text-ink-950">{item.requestType}</p>
                    <p className="mt-1 text-xs text-bank-steel">
                      {item.cardLabel} {item.maskedCardNumber ? `• ${item.maskedCardNumber}` : ""}
                    </p>
                    <p className="mt-2 text-[11px] text-bank-steel">{formatDate(item.createdAt)}</p>
                  </div>

                  <div className="sm:text-right">
                    <span className="inline-flex border border-bank-line bg-bank-mist px-3 py-1 text-xs font-semibold text-bank-blue">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
