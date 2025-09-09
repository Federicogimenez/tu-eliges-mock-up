import { Link, useLocation } from "react-router-dom";
// import MembershipCard from "../../shared/components/MembershipCard";
// import TiltedCard from "../../shared/components/TiltedCard";
import SpotlightCard from "../../shared/components/SpotlightCard";

export default function ThankYou() {

  const url = useLocation().search;
  
  const memberId = url.split('=').pop();

  return (
    <div className="pt-[25dvh] text-center bg-gradient-to-b from-blue-uchooseit/50 to-transparent text-black dark:text-white">
        <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl shiny-blue-text text-center mx-auto block leading-[1.3]">
            Congratulations!
        </h1>
        <p className=" text-center md:w-full text-sm lg:text-2xl   mb-12 mx-auto">
            you are now part of our community!
        </p>

        <div className="flex justify-center mb-8 w-11/12 h-full max-w-lg mx-auto text-white">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(225, 225, 255, 0.5)">
                <img src="/uchooseit-white.svg" alt="logo" className="w-1/3 mx-auto" />
                <h6 className="shiny-blue-text uppercase text-center text-xl font-bold mt-4">vip membership</h6>
                <p className="w-full mx-auto text-xl md:text-2xl xl:text-2xl my-6">
                    <strong className="mx-3 text-2xl md:text-3xl xl:text-4xl font-bold uppercase">
                        {memberId ? memberId : 'abc123'}
                    </strong>
                </p>
                <p className=" text-2xs">
                    You choose where to save
                </p>
                <p className="mt-2 text-xs">
                    Visual representation of your membership
                </p>
            </SpotlightCard>
        </div>
        
        <Link 
            to={"/activate?code="+memberId}
            className="uppercase w-[90%] max-w-[500px] mx-auto block mt-7 text-lg px-8 py-4 rounded-full border-2 border-black dark:border-white transition-all hover:font-semibold hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black hover:-translate-y-1"
            >
            Activate Membership
        </Link>

        <p className="font-bold mt-8">
            We sent you an email from noreply@uchooseit.us
        </p>
        <div className="w-full max-w-3xl mx-auto my-5  text-balance dark:text-gray-200 text-black/80 ">
            You have received everything you need to your email! Now you just have to activate the membership to start using it wherever you want.
        </div>


        <a href="mailto:support@uchooseit.us" target="_blank" className="underline text-gray-700 dark:text-gray-400 underline-offset-3">
            If you have questions, write to us at support@uchooseit.us
        </a>
    </div>
  )
}
