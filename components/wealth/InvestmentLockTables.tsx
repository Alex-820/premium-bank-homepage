import {
  digitalAssetLockPlans,
  digitalAssetYieldChannels,
  requiredInvestmentDisclosure,
  stockEtfLockPlans,
  stockEtfPortfolioTypes
} from "@/lib/wealth/investmentBlueprint";
import { AlertTriangle, BarChart3, Coins, LockKeyhole, ShieldCheck } from "lucide-react";

export function StockEtfLockContent() {
  return (
    <div className="grid gap-8">
      <DisclosureBox />

      <section className="border border-bank-line bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3 border-b border-bank-line pb-5">
          <BarChart3 className="mt-1 text-bank-blue" size={22} />
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
              Stock & ETF Lock Portfolio Plans
            </h2>
            <p className="mt-2 text-sm leading-7 text-bank-steel">
              Eligible clients may request reviewed stock and ETF portfolio strategies
              for selected durations. Target growth ranges are planning ranges only,
              not guaranteed investment returns.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink-950 text-white">
                <th className="border border-bank-line p-4">Plan</th>
                <th className="border border-bank-line p-4">Lock interval</th>
                <th className="border border-bank-line p-4">Target range</th>
                <th className="border border-bank-line p-4">Meaning</th>
                <th className="border border-bank-line p-4">Risk</th>
              </tr>
            </thead>
            <tbody>
              {stockEtfLockPlans.map((plan) => (
                <tr key={plan.name} className="odd:bg-white even:bg-bank-mist">
                  <td className="border border-bank-line p-4 font-semibold text-ink-950">{plan.name}</td>
                  <td className="border border-bank-line p-4 text-bank-steel">{plan.interval}</td>
                  <td className="border border-bank-line p-4 font-semibold text-bank-blue">{plan.targetRange}</td>
                  <td className="border border-bank-line p-4 text-bank-steel">{plan.meaning}</td>
                  <td className="border border-bank-line p-4 text-bank-steel">{plan.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border border-bank-line bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
          Portfolio Asset Mix
        </h2>
        <p className="mt-2 text-sm leading-7 text-bank-steel">
          Portfolio construction may include broad-market ETFs, dividend strategies,
          growth equities, bond ETFs, and cash placeholders depending on suitability,
          risk tolerance, time horizon, and advisor review.
        </p>

        <div className="mt-6 grid gap-4">
          {stockEtfPortfolioTypes.map((item) => (
            <div key={item.type} className="grid gap-4 border border-bank-line bg-bank-mist p-5 lg:grid-cols-[0.8fr_1fr_1fr_0.5fr]">
              <div>
                <p className="text-sm font-semibold text-ink-950">{item.type}</p>
              </div>
              <p className="text-sm leading-6 text-bank-steel">{item.mix}</p>
              <p className="text-sm leading-6 text-bank-steel">{item.source}</p>
              <p className="text-sm font-semibold text-bank-blue">{item.risk}</p>
            </div>
          ))}
        </div>
      </section>

      <ProcessBox product="Stock & ETF Lock Portfolio" />
    </div>
  );
}

export function DigitalAssetLockContent() {
  return (
    <div className="grid gap-8">
      <DisclosureBox />

      <section className="border border-bank-line bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3 border-b border-bank-line pb-5">
          <Coins className="mt-1 text-bank-blue" size={22} />
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
              Digital Asset Lock Program Plans
            </h2>
            <p className="mt-2 text-sm leading-7 text-bank-steel">
              Eligible clients may request reviewed digital asset lock strategies
              with target net return ranges. These ranges are not guaranteed and depend
              on asset type, strategy, market conditions, liquidity demand, fees, and risk review.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink-950 text-white">
                <th className="border border-bank-line p-4">Plan</th>
                <th className="border border-bank-line p-4">Lock interval</th>
                <th className="border border-bank-line p-4">Target net range</th>
                <th className="border border-bank-line p-4">Strategy</th>
                <th className="border border-bank-line p-4">Risk</th>
              </tr>
            </thead>
            <tbody>
              {digitalAssetLockPlans.map((plan) => (
                <tr key={plan.name} className="odd:bg-white even:bg-bank-mist">
                  <td className="border border-bank-line p-4 font-semibold text-ink-950">{plan.name}</td>
                  <td className="border border-bank-line p-4 text-bank-steel">{plan.interval}</td>
                  <td className="border border-bank-line p-4 font-semibold text-bank-blue">{plan.targetRange}</td>
                  <td className="border border-bank-line p-4 text-bank-steel">{plan.strategy}</td>
                  <td className="border border-bank-line p-4 text-bank-steel">{plan.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border border-bank-line bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
          Digital Asset Yield Channels
        </h2>
        <p className="mt-2 text-sm leading-7 text-bank-steel">
          Digital asset strategies must be reviewed through eligibility, risk, lockup,
          counterparty, custody, liquidity, and regulatory controls before access.
        </p>

        <div className="mt-6 grid gap-4">
          {digitalAssetYieldChannels.map((item) => (
            <div key={item.channel} className="border border-bank-line bg-bank-mist p-5">
              <p className="text-base font-semibold text-ink-950">{item.channel}</p>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <InfoBlock label="Value creation" value={item.valueCreation} />
                <InfoBlock label="Platform revenue" value={item.revenue} />
                <InfoBlock label="Core risk" value={item.risk} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProcessBox product="Digital Asset Lock Program" />
    </div>
  );
}

function DisclosureBox() {
  return (
    <div className="border border-bank-gold/40 bg-[#fff8e8] p-5">
      <div className="flex gap-3">
        <AlertTriangle className="mt-1 shrink-0 text-bank-gold" size={20} />
        <p className="text-sm leading-7 text-ink-900">{requiredInvestmentDisclosure}</p>
      </div>
    </div>
  );
}

function ProcessBox({ product }: { product: string }) {
  return (
    <section className="border border-bank-line bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <LockKeyhole className="mt-1 text-bank-blue" size={22} />
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink-950">
            Review, Duration, Expiry, and Loss Logic
          </h2>
          <p className="mt-2 text-sm leading-7 text-bank-steel">
            {product} access must follow profile creation, suitability review,
            product request, disclosure acknowledgement, admin/advisor review,
            portfolio or lock placeholder creation, maturity tracking, and expiry review.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <InfoBlock label="Duration" value="30, 90, 180, or 365 days depending on selected plan." />
        <InfoBlock label="Expiry" value="Proposals should expire after 10–30 days. Suitability and eligibility should refresh every 6–12 months or after material changes." />
        <InfoBlock label="Return logic" value="Target ranges depend on market performance, strategy performance, fees, risk conditions, and review status." />
        <InfoBlock label="Loss logic" value="Investor may receive less than the target range, zero return, or experience principal loss." />
      </div>

      <div className="mt-6 flex items-start gap-3 border border-bank-line bg-bank-mist p-4">
        <ShieldCheck className="mt-1 shrink-0 text-bank-blue" size={18} />
        <p className="text-xs leading-6 text-bank-steel">
          Frontend language must always say target range, reviewed strategy, eligibility,
          suitability, and risk acknowledgement. Never say guaranteed return, fixed payout,
          bank-backed profit, or risk-free yield.
        </p>
      </div>
    </section>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bank-steel">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-ink-950">{value}</p>
    </div>
  );
}
