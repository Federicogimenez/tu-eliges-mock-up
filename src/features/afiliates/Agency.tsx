import RevenueCalculator from "../../shared/components/RevenueCalculator";

export default function Agency() {
  return (
    <main className="relative w-full h-full min-h-dvh pt-[25dvh]">
        <RevenueCalculator 
          buyer="Agency" 
          default_followers={200000} 
          default_engagementPct={3} 
          default_maxDiscountPct={25}
          default_revPerMembershipAgency={10}
          />
    </main>
  )
}
