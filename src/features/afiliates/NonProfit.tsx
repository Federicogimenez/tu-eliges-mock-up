import RevenueCalculator from "../../shared/components/RevenueCalculator";

export default function NonProfit() {
  return (
    <main className="relative w-full h-full min-h-dvh pt-[25dvh]">
        <RevenueCalculator 
          buyer="Non-Profit" 
          default_followers={200000} 
          default_engagementPct={3} 
          default_maxDiscountPct={25}
          default_revPerMembershipAgency={15}
          />
    </main>
  )
}
