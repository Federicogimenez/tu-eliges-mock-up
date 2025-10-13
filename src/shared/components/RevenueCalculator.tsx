import React, { useMemo, useState } from "react";

// Allies Revenue Calculator – uchooseit.us
// Agencies landing page version with validations

const currency = (n: number, currency: string = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(isFinite(n) ? n : 0);

const numberFormat = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    isFinite(n) ? n : 0
  );

interface RevenueCalculatorProps{
  buyer: 'Agency' | 'Influencer' | 'Company' | 'Non-Profit' ;
  default_followers: number;
  default_engagementPct: number;
  default_maxDiscountPct: number;
  default_revPerMembershipAgency: number;
}

export default function RevenueCalculator({ buyer, default_engagementPct, default_followers, default_maxDiscountPct, default_revPerMembershipAgency }:RevenueCalculatorProps) {
  const membershipPrice = 47.99; // Fixed membership price
  const [followers, setFollowers] = useState<number>(default_followers);
  const [engagementPct, setEngagementPct] = useState<number>(default_engagementPct);
  const [maxDiscountPct, setMaxDiscountPct] = useState<number>(default_maxDiscountPct);
  const [revPerMembershipAfiliate, setRevPerMembershipAfiliate] = useState<number>(default_revPerMembershipAgency);
  const [revPerMembershipAgency, setRevPerMembershipAgency] = useState<number>(5);
  const [agencyInfluencers, setAgencyInfluencers] = useState<number>(1);

  const engaged = useMemo(
    () => Math.round((followers || 0) * ((engagementPct || 0) / 100)),
    [followers, engagementPct]
  );

  const discountedPrice = useMemo(
    () => +(membershipPrice * (1 - (maxDiscountPct || 0) / 100)).toFixed(2),
    [membershipPrice, maxDiscountPct]
  );

  const discountedMonthly = useMemo(
    () => +(discountedPrice / 12).toFixed(2),
    [discountedPrice]
  );

  const conversionRates = [1, 5, 10, 25, 50, 100];

  return (
    <div className="min-h-screen w-full ">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {buyer} Revenue Calculator
            </h1>
            <p className="text-neutral-900 dark:text-neutral-300">
              Edit the <span className="text-emerald-400">green</span> fields to
              model your agency's revenue with uchooseit.us.
            </p>
          </div>
          <div className="rounded-2xl bg-neutral-200 dark:bg-neutral-900 px-4 py-2 text-sm text-neutral-900 dark:text-neutral-300 shadow-lg shadow-black/30">
            Public price per year: <strong>{currency(membershipPrice)}</strong>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-white">
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-xl shadow-black/30 backdrop-blur">
            <h2 className="mb-4 text-lg font-medium">1. Negotiation Discount Community</h2>
            <div className="space-y-4">
              <KPI label="Public Price per year" value={currency(membershipPrice)} />
              <LabeledPercent label="Discount for Community. Max 25%" maxValue={25} value={maxDiscountPct} onChange={setMaxDiscountPct} help="Applied to the membership price" />
              <KPI label="Price with discount per year (Special Price for the community)" value={currency(discountedPrice)} accent />
              <KPI label="Price with discount per month *equivalent" value={currency(discountedMonthly)} />
            </div>
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-xl shadow-black/30 backdrop-blur">
            <h2 className="mb-4 text-lg font-medium">2. {buyer} Data</h2>
            <div className="space-y-4">

              {
                buyer === 'Agency' ? 
                <>
                  <LabeledNumber label="Influencers under the Agency" value={agencyInfluencers} onChange={setAgencyInfluencers} help="How many influencers your agency manages" formatter={numberFormat} />
                  <FormattedFollowers label="Followers" value={followers} onChange={setFollowers} help="Enter followers in units; commas will be added automatically" />
                  <LabeledPercent label="Engagement (%)" value={engagementPct} onChange={setEngagementPct} help="Average organic engagement percentage" />
                </>
                : null
              }
              {
                buyer === 'Influencer' ? 
                <>
                  {/* <LabeledNumber label="Influencers under the Agency" value={agencyInfluencers} onChange={setAgencyInfluencers} help="How many influencers your agency manages" formatter={numberFormat} /> */}
                  <FormattedFollowers label="Followers" value={followers} onChange={setFollowers} help="Enter followers in units; commas will be added automatically" />
                  <LabeledPercent label="Engagement (%)" value={engagementPct} onChange={setEngagementPct} help="Average organic engagement percentage" />
                </>
                : null
              }
              {
                buyer === 'Company' ? 
                <>
                  {/* <LabeledNumber label="Influencers under the Agency" value={agencyInfluencers} onChange={setAgencyInfluencers} help="How many influencers your agency manages" formatter={numberFormat} /> */}
                  <FormattedFollowers label="Clients" value={followers} onChange={setFollowers} help="Enter clients in units; commas will be added automatically" />
                  <LabeledPercent label="Engagement (%)" value={engagementPct} onChange={setEngagementPct} help="Average organic engagement percentage" />
                </>
                : null
              }
              {
                buyer === 'Non-Profit' ? 
                <>
                  {/* <LabeledNumber label="Influencers under the Agency" value={agencyInfluencers} onChange={setAgencyInfluencers} help="How many influencers your agency manages" formatter={numberFormat} /> */}
                  <FormattedFollowers label="Collaborators" value={followers} onChange={setFollowers} help="Enter collaborators in units; commas will be added automatically" />
                  <LabeledPercent label="Engagement (%)" value={engagementPct} onChange={setEngagementPct} help="Average organic engagement percentage" />
                </>
                : null
              }
              <KPI label="Organic Engagement (#)" value={numberFormat(engaged)} />

            </div>
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-xl shadow-black/30 backdrop-blur">
            <h2 className="mb-4 text-lg font-medium">3. Negotiation Terms</h2>
            <div className="space-y-4">
              {
                buyer === 'Agency' ? 
                <>
                  <LabeledCurrency label={`Revenue per Membership (Influencer)`} value={revPerMembershipAfiliate} onChange={setRevPerMembershipAfiliate} />
                  <LabeledCurrency label="Revenue per Membership (Agency)" value={revPerMembershipAgency} onChange={setRevPerMembershipAgency} />
                </>
                : null
              }
              {
                buyer === 'Influencer' ? 
                <>
                  <LabeledCurrency label={`Revenue per Membership (Influencer)`} value={revPerMembershipAfiliate} onChange={setRevPerMembershipAfiliate} />
                </>
                : null
              }
              {
                buyer === 'Company' || buyer === 'Non-Profit' ? 
                <>
                  <LabeledCurrency label={`Revenue per Membership (${buyer})`} value={revPerMembershipAfiliate} onChange={setRevPerMembershipAfiliate} />
                </>
                : null
              }
              {/* <LabeledCurrency label={`Revenue per Membership ${buyer}`} value={revPerMembershipAfiliate} onChange={setRevPerMembershipAfiliate} /> */}
              {/* <LabeledCurrency label="Revenue per Membership (Agency)" value={revPerMembershipAgency} onChange={setRevPerMembershipAgency} /> */}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl text-white border border-neutral-800 bg-neutral-900 p-5 shadow-xl shadow-black/30 backdrop-blur">
          <div className="mb-4">
            <h2 className="text-lg font-medium">Conversion Scenarios</h2>
            <p className="text-sm text-neutral-400">Based on estimated organic engagement: {numberFormat(engaged)} people</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-900 text-neutral-300">
                  <Th>Conversion Rate</Th>
                  <Th>Memberships Sold</Th>
                  {
                    buyer === 'Agency' ?
                    <>
                      <Th>Revenue for Influencer</Th>
                      <Th>Revenue for Agency</Th>
                      <Th>Total Revenue Agency per Influencers</Th>
                    </>
                    :
                    <Th>Revenue for {buyer}</Th>
                  }
                  
                </tr>
              </thead>
              <tbody>
                {conversionRates.map((rate) => {
                  const sold = Math.round(engaged * (rate / 100));
                  const afiliate = sold * (revPerMembershipAfiliate || 0);
                  const ag = sold * (revPerMembershipAgency);
                  const agTotal = ag * (agencyInfluencers || 1);
                  // const agTotal_companies = ag * (agencyInfluencers || 1);
                  return (
                    <tr key={rate} className="border-b border-neutral-800/80 hover:bg-neutral-800/40">
                      <Td>{rate}%</Td>
                      <Td>{numberFormat(sold)}</Td>
                      <Td>{currency(afiliate)}</Td>
                      {buyer === 'Agency' ?
                        <>
                          {/* <Td>{currency(afiliate)}</Td> */}
                          <Td>{currency(ag)}</Td>
                          <Td>{currency(agTotal)}</Td>
                        </>
                        : null
                      }
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-neutral-900/60">
                  <Td className="font-semibold">GOAL (100%)</Td>
                  <Td className="font-semibold">{numberFormat(engaged)}</Td>

                  {
                    buyer === 'Agency' ? 
                    <>
                      <Td className="font-semibold">{currency(engaged * (revPerMembershipAfiliate || 0))}</Td>
                      <Td className="font-semibold">{currency(engaged * (revPerMembershipAgency || 0))}</Td>
                      <Td className="font-semibold">{currency(engaged * (revPerMembershipAgency || 0) * (agencyInfluencers || 1))}</Td>
                    </>
                    : 
                    <Td className="font-semibold">{currency(engaged * (revPerMembershipAfiliate || 0) * (agencyInfluencers || 1))}</Td>
                  }

                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-neutral-500">
          uchooseit.us - Transparency you can trust. This calculator is a
          planning tool and does not represent a binding offer.
        </p>
      </div>
    </div>
  );
}

function Th({ children }: React.PropsWithChildren) {
  return <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide">{children}</th>;
}

function Td({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <td className={`px-3 py-2 align-middle ${className}`}>{children}</td>;
}

function Label({ children, required = false }: React.PropsWithChildren<{ required?: boolean }>) {
  return (
    <label className="mb-1 block text-xs font-medium text-neutral-300">
      {children}
      {required && <span className="text-rose-400"> *</span>}
    </label>
  );
}

function LabeledNumber({ label, value, onChange, help, formatter }: { label: string; value: number; onChange: (n: number) => void; help?: string; formatter?: (n: number) => string; }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 0) onChange(val);
  };
  return (
    <div>
      <Label required>{label}</Label>
      <input type="number" min="0" inputMode="decimal" className="w-full rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-emerald-100 focus:border-emerald-400 focus:outline-none" value={isNaN(value) ? "" : value} onChange={handleChange} placeholder="0" step="1" />
      {help && <p className="mt-1 text-xs text-neutral-400">{help}{formatter ? ` — Current: ${formatter(value)}` : ""}</p>}
    </div>
  );
}

function LabeledPercent({ label, value, onChange, help, maxValue = 100 }: { label: string; value: number; maxValue?: number; onChange: (n: number) => void; help?: string; }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 0) onChange(val);
  };
  return (
    <div>
      <Label required>{label}</Label>
      <div className="flex items-center gap-3">
        <input type="number" min="0" inputMode="decimal" max={maxValue} className="w-full rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-emerald-100 focus:border-emerald-400 focus:outline-none" value={isNaN(value) ? "" : value} onChange={handleChange} placeholder="0" step="0.01" />
        <span className="rounded-md bg-emerald-500/15 px-2 py-1 text-xs text-emerald-200">%</span>
      </div>
      {help && <p className="mt-1 text-xs text-neutral-400">{help}</p>}
    </div>
  );
}

function LabeledCurrency({ label, value, onChange, help }: { label: string; value: number; onChange: (n: number) => void; help?: string; }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 0) onChange(val);
  };
  return (
    <div>
      <Label required>{label}</Label>
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-emerald-500/15 px-2 py-1 text-xs text-emerald-200">$</span>
        <input type="number" min="0" inputMode="decimal" className="w-full rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-emerald-100 focus:border-emerald-400 focus:outline-none" value={isNaN(value) ? "" : value} onChange={handleChange} placeholder="0" step="0.01" />
      </div>
      {help && <p className="mt-1 text-xs text-neutral-400">{help}</p>}
    </div>
  );
}

function KPI({ label, value, accent = false }: { label: string; value: React.ReactNode; accent?: boolean }) {
  return (
    <div className={"rounded-xl border px-4 py-3 " + (accent ? "border-yellow-400/40 bg-yellow-500/10 text-yellow-200" : "border-neutral-700 bg-neutral-800/60 text-neutral-200")}>
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

// Followers input with real-time US comma formatting (no negatives)
function FormattedFollowers({ label, value, onChange, help }: { label: string; value: number; onChange: (n: number) => void; help?: string; }) {
  const removeCommas = (s: string) => s.split(",").join("");
//   const digitsOnly = (s: string) => Array.from(s).filter((c) => (c >= "0" && c <= "9") || c === ".").join("");
  const formatWithCommas = (s: string) => {
    if (s === "") return s;
    const noCommas = removeCommas(s);
    const parts = noCommas.split(".");
    const intPart = parts[0].replace(/\D/g, "");
    const decPart = parts.length > 1 ? parts[1].replace(/\D/g, "") : "";
    const intNum = intPart === "" ? 0 : Number(intPart);
    const intFormatted = Number.isFinite(intNum) ? intNum.toLocaleString("en-US") : "";
    return decPart !== "" ? `${intFormatted}.${decPart}` : intFormatted;
  };

  const [text, setText] = useState<string>(numberFormat(value));

  React.useEffect(() => {
    setText(numberFormat(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = removeCommas(raw);
    if (!/^\d*(\.\d*)?$/.test(cleaned)) return;
    const num = cleaned === "" ? NaN : Number(cleaned);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
      setText(formatWithCommas(raw));
    } else if (cleaned === "") {
      setText("");
    }
  };

  const handleBlur = () => setText(numberFormat(value || 0));

  return (
    <div>
      <Label required>{label}</Label>
      <input type="text" inputMode="decimal" className="w-full rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-emerald-100 focus:border-emerald-400 focus:outline-none" value={text} onChange={handleChange} onBlur={handleBlur} placeholder="0" />
      {help && <p className="mt-1 text-xs text-neutral-400">{help}</p>}
    </div>
  );
}
