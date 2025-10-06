
import icon_gps from '/icons/benefits/gps.svg'
import icon_discount from '/icons/benefits/discount.svg'
import icon_permanent from '/icons/benefits/permanent.svg'
import icon_privacy from '/icons/benefits/privacy.svg'
import icon_quick from '/icons/benefits/quick.svg'
import icon_save from '/icons/benefits/save.svg'
import { useNavigate } from 'react-router-dom';
import ScrollToSection from '../../hooks/useScrollSection';
import ButtonSecondary from '../components/ButtonSecondary'

const benefits = [
  {
    icon: icon_save,
    title: 'Save $2,000+ per year - 50% off ',
    description: 'Travel • Dining • Shopping • Entertainment',
    note: '*Average member savings in 2024'
  },

  {
    icon: icon_permanent,
    title: 'Permanent discounts:',
    description: 'Use as often as you want.',
    note: null
  },
  {
    icon: icon_quick,
    title: 'Quick and easy:',
    description: 'Redenptions no complicated steps.',
    note: null
  },
  {
    icon: icon_gps,
    title: 'GPS-enabled savings:',
    description: 'Find offers near you.',
    note: null
  },
  {
    icon: icon_discount,
    title: 'Over 1 millon:',
    description: 'Nationwide deals at hand.',
    note: null
  },
  {
    icon: icon_privacy,
    title: 'Privacy protected:',
    description: 'We never sell your data.',
    note: null
  }
];

export interface BenefitSlide{
      color: string,
      discount: string,
      with_img: string,
      withoout_img: string,
}

export default function Benefits () {

    const navigate = useNavigate();

    function handleNavigateCalculator(){
        navigate('/')
        setTimeout(() => {
            ScrollToSection("calculator")
        }, 1000);
    }

    
  return (
    <section className="py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto">

        <h2 className='heading-1 mb-8 text-center'>
            Exclusive Benefits
        </h2>

        <div className='flex flex-col  justify-center items-center gap-x-8 gap-y-10'>
          
          
          {/* Benefits List */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr  place-content-center place-items-center gap-x-8 gap-y-12 py-[5dvh]'>
            {benefits.map((benefit, index) => (
              <div key={index} className="w-fit flex flex-col justify-center items-center gap-3">
                <img src={benefit.icon} alt="icon" className='size-20 object-contain object-center' />
                <div className='text-center'>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

            <div className='relative w-full max-w-md' onClick={handleNavigateCalculator} >
                <ButtonSecondary text={'Calculate Savings'} redirect={''} />
            </div>
        </div>
      </div>
    </section>
  );
};