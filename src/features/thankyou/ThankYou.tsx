import { Link, useLocation } from "react-router-dom";

export default function ThankYou() {

  const url = useLocation().search;
  
  const memberId = url.split('=').pop();

  return (
    <div className="pt-[30dvh] text-center bg-gradient-to-b from-blue-uchooseit/50 to-transparent text-black dark:text-white">
        <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl shiny-blue-text text-center mx-auto block leading-[1.3]">
            Congratulations!
        </h1>
        <p className=" text-center md:w-full text-sm lg:text-2xl   mb-12 mx-auto">
            you are now part of our community!
        </p>

        <p className="w-11/12 max-w-xl mx-auto mt-8 p-5 text-xl md:text-2xl xl:text-3xl mb-6 border border-white rounded-2xl shadow-lg shadow-white">
            Your member ID is 
            <strong className="mx-3 text-2xl md:text-3xl xl:text-4xl font-bold text-blue-uchooseit">
                {memberId ? memberId : 'abc123'}
            </strong>
            <Link 
                to="/activate"
                className="uppercase w-[90%] max-w-[500px] mx-auto block mt-7 text-lg px-8 py-4 rounded-full border-2 border-black dark:border-white transition-all hover:font-semibold hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black hover:-translate-y-1"
                >
                Activate Mambership
            </Link>

        </p>
        <p className="font-bold">
            We sent you an email from noreply@uchooseit.us
        </p>
        <div className="w-full max-w-3xl mx-auto mt-2 mb-5  text-balance ">
            You have received everything you need to your email! Now you just have to activate the membership to start using it wherever you want.
        </div>


        <a href="mailto:support@uchooseit.us" target="_blank" className="underline underline-offset-3">
            If you have questions, write to us at support@uchooseit.us
        </a>
    </div>
  )
}
