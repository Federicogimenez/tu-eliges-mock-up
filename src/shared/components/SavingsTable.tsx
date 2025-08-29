
interface RowData {
  item: string;
  qty: string;
  price: string;
  total: string;
}

interface SectionData {
  logo: string;
  rows: RowData[];
  subtotal: string;
}

const data: SectionData[] = [
  {
    logo: "/icon-dining.svg",
    rows: [
      { item: "52 Breakfast/Coffee ", qty: "", price: "$3", total: "$156" },
      { item: "24 Lunch", qty: "", price: "$3", total: "$72" },
      { item: "52 Dinner", qty: "", price: "$5", total: "$260" },
      { item: "24 Pizza", qty: "", price: "$8", total: "$192" },
    ],
    // rows: [
    //   { item: "Breakfast/Coffee", qty: "52 purchases", price: "$3", total: "$156" },
    //   { item: "Lunch", qty: "24 meals", price: "$3", total: "$72" },
    //   { item: "Dinner", qty: "52 meals", price: "$5", total: "$260" },
    //   { item: "Pizza", qty: "24 purchases", price: "$8", total: "$192" },
    // ],
    subtotal: "$680",
  },
  {
    logo: "/icon-shop.svg",
    rows: [
      { item: "8 Apparel", qty: "", price: "$15", total: "$120" },
      { item: "8 Self-Care (Spa, Gym, Makeup, etc.)", qty: "", price: "$15", total: "$120" },
      { item: "4 Flowers/Gifts", qty: "", price: "$10", total: "$40" },
      { item: "2 Home Projects", qty: "", price: "$50", total: "$100" },
      { item: "4 Oil Changes", qty: "", price: "$10", total: "$40" },
      { item: "8 Misc. Shopping", qty: "", price: "$12.50", total: "$100" },
      { item: "1 Cell Phone Plan", qty: "", price: "$125", total: "$125" },
    ],
    subtotal: "$615",
  },
  {
    logo: "/icon-entertainment.svg",
    rows: [
      { item: "4 Theme Park/Attraction Tickets", qty: "", price: "$40", total: "$160" },
      { item: "4 Bowling/Laser Tag/Mini Golf", qty: "", price: "$5", total: "$20" },
      { item: "4 Concerts/Sports/Event Tickets", qty: "", price: "$20", total: "$80" },
      { item: "6 Movies", qty: "", price: "$13", total: "$78" },
      { item: "4 Golf Rounds", qty: "", price: "$15", total: "$60" },
    ],
    subtotal: "$338",
  },
  {
    logo: "/icon-travel.svg",
    rows: [
      { item: "7 Hotel Stays", qty: "", price: "$30", total: "$210" },
      { item: "5 Car Rental", qty: "", price: "$35", total: "$175" },
      { item: "2 Flights", qty: "", price: "$20", total: "$40" },
    ],
    subtotal: "$385",
  },
];

export default function SavingsTable() {
  return (
    <div className="relative w-11/12 max-w-2xl mx-auto bg-white dark:bg-black text-black dark:text-white rounded-lg overflow-hidden shadow-lg">
      {data.map((section, idx) => (
        <div key={idx} className="flex justify-center items-start gap-x-2 mb-10">
          <picture className="relative hidden lg:block size-40">
            <img src={section.logo} alt="logo" className="w-full h-full object-contain object-center" />
          </picture>
          <div className="w-full">
            <picture className="relative block lg:hidden size-10">
              <img src={section.logo} alt="logo" className="w-full h-full object-contain object-center" />
            </picture>
            <table className="w-full text-sm">
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-2 px-3">{row.item}</td>
                    <td className="py-2 px-3 text-center">x</td>
                    <td className="py-2 px-3 text-center">Saved {row.price} each</td>
                    <td className="py-2 px-3 text-center">={row.qty}</td>
                    <td className="py-2 px-3 text-right">{row.total}</td>
                  </tr>
                ))}
    
              </tbody>
            </table>
            <div className="w-6/12 min-w-[250px] mt-2 py-1 pl-2 bg-blue-gradient-start text-black ml-auto rounded-xl font-semibold flex justify-between items-center">
                <span className=" px-2 text-right text-nowrap">
                  Yearly Savings
                </span>
                <span className=" font-bold text-2xl">
                  =
                </span>
                <span className=" px-3 text-right">{section.subtotal}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="w-11/12 mx-auto bg-blue-gradient-start text-black text-center font-bold text-lg py-3 rounded-full">
        YEARLY SAVINGS: <span className="text-black">$2,018</span>
      </div>
    </div>
  );
}
