import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  Utensils,
  Car,
  Fuel,
  Ticket,
  ParkingCircle,
  Castle,
  Star,
  Briefcase,
  Users,
  CalendarDays,
  MapPin,
  Globe2,
  Tag,
} from "lucide-react";

const PURPLE = "#884CFC";

type Country = "Argentina" | "Colombia" | "México";
type ExpenseType = "per_person" | "shared";
type CalculationType = "fixed" | "per_day" | "per_night" | "per_match";

type TravelItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  type: ExpenseType;
  calc: CalculationType;
  unitAmount: number;
  note: string;
};

type ControlCardProps = {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
};

const baseByCountry: Record<Country, { flight: number }> = {
  Argentina: { flight: 800 },
  Colombia: { flight: 400 },
  México: { flight: 300 },
};

const durationOptions = [7, 10, 15, 20, 30];

function getMatchCount(days: number): number {
  if (days <= 7) return 1;
  if (days <= 10) return 2;
  if (days <= 15) return 3;
  if (days <= 20) return 4;
  return 5;
}

const defaultItems: TravelItem[] = [
  {
    id: "flight",
    label: "Vuelo internacional",
    icon: Plane,
    color: "#2F80ED",
    type: "per_person",
    calc: "fixed",
    unitAmount: 800,
    note: "Por viajero",
  },
  {
    id: "hotel",
    label: "Hotel cerca / con acceso al estadio",
    icon: Hotel,
    color: PURPLE,
    type: "shared",
    calc: "per_night",
    unitAmount: 230,
    note: "Total bajo: $3,200 / 14 noches",
  },
  {
    id: "food",
    label: "Comida",
    icon: Utensils,
    color: "#FFB800",
    type: "per_person",
    calc: "per_day",
    unitAmount: 72,
    note: "Total bajo: $1,080 / 15 días",
  },
  {
    id: "car",
    label: "Alquiler de auto",
    icon: Car,
    color: "#00A86B",
    type: "shared",
    calc: "per_day",
    unitAmount: 74,
    note: "Total bajo: $1,100 / 15 días",
  },
  {
    id: "gas",
    label: "Gasolina + peajes",
    icon: Fuel,
    color: "#16A34A",
    type: "shared",
    calc: "per_day",
    unitAmount: 12,
    note: "Total bajo: $180 / 15 días",
  },
  {
    id: "matches",
    label: "Tickets partidos Mundial",
    icon: Ticket,
    color: "#EF3B5D",
    type: "per_person",
    calc: "per_match",
    unitAmount: 155,
    note: "Total bajo: $465 / 3 partidos",
  },
  {
    id: "parking",
    label: "Estacionamiento partidos",
    icon: ParkingCircle,
    color: "#178F4D",
    type: "shared",
    calc: "per_match",
    unitAmount: 175,
    note: "Total bajo: $525 / 3 partidos",
  },
  {
    id: "themepark",
    label: "Parque temático en Orlando",
    icon: Castle,
    color: "#EC4899",
    type: "per_person",
    calc: "fixed",
    unitAmount: 150,
    note: "Total bajo: $150 / 1 día",
  },
  {
    id: "extras",
    label: "Actividades extra",
    icon: Star,
    color: PURPLE,
    type: "per_person",
    calc: "per_day",
    unitAmount: 17,
    note: "Total bajo: $250 / 15 días",
  },
];

function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getTimeFactor(item: TravelItem, duration: number): number {
  const nights = Math.max(duration - 1, 1);
  const matches = getMatchCount(duration);

  if (item.calc === "per_night") return nights;
  if (item.calc === "per_day") return duration;
  if (item.calc === "per_match") return matches;
  return 1;
}

function getDynamicNote(item: TravelItem, duration: number): string {
  const nights = Math.max(duration - 1, 1);
  const matches = getMatchCount(duration);

  if (item.calc === "per_night") {
    return `${nights} noches · ${formatUSD(item.unitAmount)}/noche`;
  }

  if (item.calc === "per_day") {
    return `${duration} días · ${formatUSD(item.unitAmount)}/día`;
  }

  if (item.calc === "per_match") {
    return `${matches} ${matches === 1 ? "partido" : "partidos"} · ${formatUSD(
      item.unitAmount
    )} c/u`;
  }

  return item.note;
}

function getItemTotal(item: TravelItem, travelers: number, duration: number): number {
  const peopleMultiplier = item.type === "per_person" ? travelers : 1;
  const timeFactor = getTimeFactor(item, duration);
  return item.unitAmount * timeFactor * peopleMultiplier;
}

export default function UchooseitTravelCalculator(): JSX.Element {
  const [country, setCountry] = useState<Country>("Argentina");
  const [travelers, setTravelers] = useState<number>(1);
  const [duration, setDuration] = useState<number>(15);
  const [items] = useState<TravelItem[]>(defaultItems);

  const adjustedItems = useMemo<TravelItem[]>(() => {
    return items.map((item) => {
      if (item.id === "flight") {
        return { ...item, unitAmount: baseByCountry[country].flight };
      }

      return item;
    });
  }, [items, country]);

  const total = useMemo<number>(() => {
    return adjustedItems.reduce((sum, item) => {
      return sum + getItemTotal(item, travelers, duration);
    }, 0);
  }, [adjustedItems, travelers, duration]);

  const savingsRate = 0.11;
  const estimatedSavings = Math.round(total * savingsRate);

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-950 md:p-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl md:p-8">
        <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black tracking-tight md:text-5xl"
            >
              Calcula cuánto podría costarte tu viaje
            </motion.h1>
            <p className="mt-2 max-w-3xl text-base text-slate-500 md:text-xl">
              Personaliza tu presupuesto y descubre tu ahorro potencial con Uchooseit.us.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-purple-50 px-4 py-3 font-black text-slate-950">
            <MapPin className="h-6 w-6" style={{ color: PURPLE }} />
            <span className="text-2xl">
              uchooseit<span style={{ color: PURPLE }}>.us</span>
            </span>
          </div>
        </header>

        <section className="mb-5 grid gap-4 md:grid-cols-4">
          <ControlCard icon={Globe2} label="País de salida">
            <select
              className="w-full bg-transparent text-lg font-bold outline-none"
              value={country}
              onChange={(event) => setCountry(event.target.value as Country)}
            >
              <option>Argentina</option>
              <option>Colombia</option>
              <option>México</option>
            </select>
          </ControlCard>

          <ControlCard icon={Users} label="Viajeros">
            <select
              className="w-full bg-transparent text-lg font-bold outline-none"
              value={travelers}
              onChange={(event) => setTravelers(Number(event.target.value))}
            >
              {[1, 2, 3, 4].map((numberOfTravelers) => (
                <option key={numberOfTravelers} value={numberOfTravelers}>
                  {numberOfTravelers} {numberOfTravelers === 1 ? "viajero" : "viajeros"}
                </option>
              ))}
            </select>
          </ControlCard>

          <ControlCard icon={CalendarDays} label="Duración">
            <select
              className="w-full bg-transparent text-lg font-bold outline-none"
              value={duration}
              onChange={(event) => setDuration(Number(event.target.value))}
            >
              {durationOptions.map((days) => (
                <option key={days} value={days}>
                  {days} días
                </option>
              ))}
            </select>
          </ControlCard>

          <ControlCard icon={MapPin} label="Destino">
            <div className="text-lg font-bold">Miami / Orlando</div>
          </ControlCard>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.25fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl p-3 text-white" style={{ backgroundColor: PURPLE }}>
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black" style={{ color: PURPLE }}>
                TU PRESUPUESTO ESTIMADO
              </h2>
            </div>

            <div className="hidden grid-cols-[1.7fr_0.8fr_0.8fr] border-b border-slate-200 pb-3 text-sm font-bold uppercase tracking-wide text-slate-500 md:grid">
              <span>Categoría</span>
              <span>Tipo</span>
              <span className="text-right">Total bajo estimado</span>
            </div>

            <div className="divide-y divide-slate-100">
              {adjustedItems.map((item) => {
                const Icon = item.icon;
                const displayAmount = getItemTotal(item, travelers, duration);

                return (
                  <div
                    key={item.id}
                    className="grid gap-3 py-3 md:grid-cols-[1.7fr_0.8fr_0.8fr] md:items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0" style={{ color: item.color }} />
                      <div>
                        <p className="font-bold">{item.label}</p>
                        <p className="text-xs text-slate-500">{getDynamicNote(item, duration)}</p>
                      </div>
                    </div>

                    <div>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${
                          item.type === "shared"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.type === "shared" ? "COMPARTIDO" : "POR PERSONA"}
                      </span>
                    </div>

                    <div className="text-right text-lg font-black">{formatUSD(displayAmount)}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-3xl bg-purple-50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl p-3 text-white" style={{ backgroundColor: PURPLE }}>
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">TOTAL ESTIMADO</p>
                  <p className="text-xs text-slate-400">Basado en valores de total bajo</p>
                </div>
              </div>
              <div className="text-3xl font-black md:text-4xl" style={{ color: PURPLE }}>
                {formatUSD(total)}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.75rem] border border-green-200 bg-gradient-to-br from-white via-green-50 to-white p-6 shadow-sm"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="rounded-full bg-green-600 p-4 text-white shadow-lg shadow-green-200">
                <Tag className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-black text-green-700">TU AHORRO POTENCIAL</h2>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-white/70 p-6 text-center">
              <p className="text-7xl font-black text-green-700">11%</p>
              <p className="mt-2 text-lg text-slate-700">Ahorro promedio como miembro premium</p>

              <div className="my-6 h-px w-full bg-green-100" />

              <p className="text-5xl font-black text-green-700 md:text-6xl">
                {formatUSD(estimatedSavings)}
              </p>
              <p className="mt-2 text-xl font-bold text-slate-700">Ahorro estimado</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
                Calculado según tu presupuesto, duración del viaje y uso de la membresía.
              </p>
            </div>
          </motion.div>
        </section>

        <p className="mt-6 text-center text-sm text-slate-400">
          Los valores usan el escenario de total bajo y pueden variar según duración, temporada,
          disponibilidad, ciudad, proveedor y tipo de cambio.
        </p>
      </div>
    </div>
  );
}

function ControlCard({ icon: Icon, label, children }: ControlCardProps): JSX.Element {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Icon className="h-7 w-7" style={{ color: PURPLE }} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-500">{label}</p>
        {children}
      </div>
    </div>
  );
}
