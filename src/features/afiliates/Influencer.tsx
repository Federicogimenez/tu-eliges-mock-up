import RevenueCalculator from "../../shared/components/RevenueCalculator";

export default function Influencer() {
  return (
    <main className="relative w-full h-full min-h-dvh pt-[25dvh]">
        <RevenueCalculator 
          buyer="Influencer" 
          default_followers={200000} 
          default_engagementPct={3} 
          default_maxDiscountPct={25}
          default_revPerMembershipAgency={10}
          />
    </main>
  )
}
