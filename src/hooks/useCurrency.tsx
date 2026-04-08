import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export interface CountryCurrency {
  country: string;
  code: string;
  symbol: string;
}

export const COUNTRIES: CountryCurrency[] = [
  { country: "Afghanistan", code: "AFN", symbol: "؋" },
  { country: "Albania", code: "ALL", symbol: "L" },
  { country: "Algeria", code: "DZD", symbol: "د.ج" },
  { country: "Angola", code: "AOA", symbol: "Kz" },
  { country: "Argentina", code: "ARS", symbol: "AR$" },
  { country: "Australia", code: "AUD", symbol: "A$" },
  { country: "Austria", code: "EUR", symbol: "€" },
  { country: "Bahrain", code: "BHD", symbol: "BD" },
  { country: "Bangladesh", code: "BDT", symbol: "৳" },
  { country: "Belgium", code: "EUR", symbol: "€" },
  { country: "Benin", code: "XOF", symbol: "CFA" },
  { country: "Bolivia", code: "BOB", symbol: "Bs" },
  { country: "Botswana", code: "BWP", symbol: "P" },
  { country: "Brazil", code: "BRL", symbol: "R$" },
  { country: "Brunei", code: "BND", symbol: "B$" },
  { country: "Bulgaria", code: "BGN", symbol: "лв" },
  { country: "Burkina Faso", code: "XOF", symbol: "CFA" },
  { country: "Cameroon", code: "XAF", symbol: "FCFA" },
  { country: "Canada", code: "CAD", symbol: "CA$" },
  { country: "Chile", code: "CLP", symbol: "CL$" },
  { country: "China", code: "CNY", symbol: "¥" },
  { country: "Colombia", code: "COP", symbol: "CO$" },
  { country: "Congo (DRC)", code: "CDF", symbol: "FC" },
  { country: "Costa Rica", code: "CRC", symbol: "₡" },
  { country: "Côte d'Ivoire", code: "XOF", symbol: "CFA" },
  { country: "Croatia", code: "EUR", symbol: "€" },
  { country: "Cuba", code: "CUP", symbol: "₱" },
  { country: "Czech Republic", code: "CZK", symbol: "Kč" },
  { country: "Denmark", code: "DKK", symbol: "kr" },
  { country: "Dominican Republic", code: "DOP", symbol: "RD$" },
  { country: "Ecuador", code: "USD", symbol: "$" },
  { country: "Egypt", code: "EGP", symbol: "E£" },
  { country: "El Salvador", code: "USD", symbol: "$" },
  { country: "Ethiopia", code: "ETB", symbol: "Br" },
  { country: "Finland", code: "EUR", symbol: "€" },
  { country: "France", code: "EUR", symbol: "€" },
  { country: "Gambia", code: "GMD", symbol: "D" },
  { country: "Germany", code: "EUR", symbol: "€" },
  { country: "Ghana", code: "GHS", symbol: "GH₵" },
  { country: "Greece", code: "EUR", symbol: "€" },
  { country: "Guatemala", code: "GTQ", symbol: "Q" },
  { country: "Guinea", code: "GNF", symbol: "FG" },
  { country: "Honduras", code: "HNL", symbol: "L" },
  { country: "Hong Kong", code: "HKD", symbol: "HK$" },
  { country: "Hungary", code: "HUF", symbol: "Ft" },
  { country: "Iceland", code: "ISK", symbol: "kr" },
  { country: "India", code: "INR", symbol: "₹" },
  { country: "Indonesia", code: "IDR", symbol: "Rp" },
  { country: "Iran", code: "IRR", symbol: "﷼" },
  { country: "Iraq", code: "IQD", symbol: "ع.د" },
  { country: "Ireland", code: "EUR", symbol: "€" },
  { country: "Israel", code: "ILS", symbol: "₪" },
  { country: "Italy", code: "EUR", symbol: "€" },
  { country: "Jamaica", code: "JMD", symbol: "J$" },
  { country: "Japan", code: "JPY", symbol: "¥" },
  { country: "Jordan", code: "JOD", symbol: "JD" },
  { country: "Kazakhstan", code: "KZT", symbol: "₸" },
  { country: "Kenya", code: "KES", symbol: "KSh" },
  { country: "Kuwait", code: "KWD", symbol: "KD" },
  { country: "Lebanon", code: "LBP", symbol: "L£" },
  { country: "Liberia", code: "LRD", symbol: "L$" },
  { country: "Libya", code: "LYD", symbol: "LD" },
  { country: "Madagascar", code: "MGA", symbol: "Ar" },
  { country: "Malawi", code: "MWK", symbol: "MK" },
  { country: "Malaysia", code: "MYR", symbol: "RM" },
  { country: "Mali", code: "XOF", symbol: "CFA" },
  { country: "Mexico", code: "MXN", symbol: "MX$" },
  { country: "Morocco", code: "MAD", symbol: "MAD" },
  { country: "Mozambique", code: "MZN", symbol: "MT" },
  { country: "Myanmar", code: "MMK", symbol: "K" },
  { country: "Namibia", code: "NAD", symbol: "N$" },
  { country: "Nepal", code: "NPR", symbol: "Rs" },
  { country: "Netherlands", code: "EUR", symbol: "€" },
  { country: "New Zealand", code: "NZD", symbol: "NZ$" },
  { country: "Nicaragua", code: "NIO", symbol: "C$" },
  { country: "Niger", code: "XOF", symbol: "CFA" },
  { country: "Nigeria", code: "NGN", symbol: "₦" },
  { country: "Norway", code: "NOK", symbol: "kr" },
  { country: "Oman", code: "OMR", symbol: "OMR" },
  { country: "Pakistan", code: "PKR", symbol: "Rs" },
  { country: "Panama", code: "PAB", symbol: "B/." },
  { country: "Paraguay", code: "PYG", symbol: "₲" },
  { country: "Peru", code: "PEN", symbol: "S/." },
  { country: "Philippines", code: "PHP", symbol: "₱" },
  { country: "Poland", code: "PLN", symbol: "zł" },
  { country: "Portugal", code: "EUR", symbol: "€" },
  { country: "Qatar", code: "QAR", symbol: "QR" },
  { country: "Romania", code: "RON", symbol: "lei" },
  { country: "Russia", code: "RUB", symbol: "₽" },
  { country: "Rwanda", code: "RWF", symbol: "RF" },
  { country: "Saudi Arabia", code: "SAR", symbol: "SR" },
  { country: "Senegal", code: "XOF", symbol: "CFA" },
  { country: "Serbia", code: "RSD", symbol: "din" },
  { country: "Sierra Leone", code: "SLL", symbol: "Le" },
  { country: "Singapore", code: "SGD", symbol: "S$" },
  { country: "Somalia", code: "SOS", symbol: "Sh" },
  { country: "South Africa", code: "ZAR", symbol: "R" },
  { country: "South Korea", code: "KRW", symbol: "₩" },
  { country: "Spain", code: "EUR", symbol: "€" },
  { country: "Sri Lanka", code: "LKR", symbol: "Rs" },
  { country: "Sudan", code: "SDG", symbol: "SDG" },
  { country: "Sweden", code: "SEK", symbol: "kr" },
  { country: "Switzerland", code: "CHF", symbol: "CHF" },
  { country: "Syria", code: "SYP", symbol: "S£" },
  { country: "Taiwan", code: "TWD", symbol: "NT$" },
  { country: "Tanzania", code: "TZS", symbol: "TSh" },
  { country: "Thailand", code: "THB", symbol: "฿" },
  { country: "Togo", code: "XOF", symbol: "CFA" },
  { country: "Trinidad and Tobago", code: "TTD", symbol: "TT$" },
  { country: "Tunisia", code: "TND", symbol: "DT" },
  { country: "Turkey", code: "TRY", symbol: "₺" },
  { country: "Uganda", code: "UGX", symbol: "USh" },
  { country: "Ukraine", code: "UAH", symbol: "₴" },
  { country: "United Arab Emirates", code: "AED", symbol: "AED" },
  { country: "United Kingdom", code: "GBP", symbol: "£" },
  { country: "United States", code: "USD", symbol: "$" },
  { country: "Uruguay", code: "UYU", symbol: "$U" },
  { country: "Uzbekistan", code: "UZS", symbol: "сўм" },
  { country: "Venezuela", code: "VES", symbol: "Bs.S" },
  { country: "Vietnam", code: "VND", symbol: "₫" },
  { country: "Yemen", code: "YER", symbol: "﷼" },
  { country: "Zambia", code: "ZMW", symbol: "ZK" },
  { country: "Zimbabwe", code: "ZWL", symbol: "Z$" },
];

interface CurrencyContextType {
  currency: CountryCurrency;
  setCurrency: (c: CountryCurrency) => void;
  formatPrice: (nairaAmount: number) => string;
}

// Rough conversion rates from NGN
const RATES: Record<string, number> = {
  NGN: 1, USD: 0.00063, GBP: 0.0005, CAD: 0.00086, GHS: 0.0095,
  ZAR: 0.012, KES: 0.082, AED: 0.0023, INR: 0.053, EUR: 0.00058,
  AUD: 0.00097, BRL: 0.0032, CNY: 0.0046, JPY: 0.095, KRW: 0.87,
  MXN: 0.011, SGD: 0.00085, CHF: 0.00056, SEK: 0.0068, NOK: 0.007,
  DKK: 0.0043, PLN: 0.0025, CZK: 0.015, HUF: 0.24, RON: 0.0029,
  BGN: 0.0011, RUB: 0.058, TRY: 0.021, EGP: 0.031, PKR: 0.18,
  BDT: 0.069, IDR: 10.1, PHP: 0.036, THB: 0.023, VND: 16.0,
  MYR: 0.003, TWD: 0.02, HKD: 0.005, NZD: 0.001, XOF: 0.38,
  XAF: 0.38, SAR: 0.0024, QAR: 0.0023, KWD: 0.0002, BHD: 0.00024,
  OMR: 0.00024, JOD: 0.00045, ILS: 0.0024, COP: 2.63, CLP: 0.6,
  PEN: 0.0024, ARS: 0.56, UYU: 0.025, BOB: 0.0044, PYG: 4.7,
  CRC: 0.33, GTQ: 0.005, HNL: 0.016, NIO: 0.023, DOP: 0.038,
  JMD: 0.1, TTD: 0.0043, LKR: 0.19, NPR: 0.085, MMK: 1.33,
  KZT: 0.3, UZS: 8.1, UAH: 0.026, RSD: 0.069, AFN: 0.044,
  ALL: 0.059, DZD: 0.085, AOA: 0.57, IRR: 26.5, IQD: 0.83,
  LBP: 56.7, LYD: 0.003, MAD: 0.0063, MZN: 0.04, NAD: 0.012,
  SOS: 0.36, SDG: 0.38, SYP: 8.2, TZS: 1.63, TND: 0.002,
  UGX: 2.35, YER: 0.16, ZMW: 0.017, ZWL: 0.0063, ETB: 0.037,
  RWF: 0.86, SLL: 14.2, GNF: 5.44, MWK: 1.1, MGA: 2.88,
  GMD: 0.045, LRD: 0.12, BWP: 0.0087, CDF: 1.78, CUP: 0.015,
  BND: 0.00085, ISK: 0.088, PAB: 0.00063, VES: 0.023,
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<CountryCurrency>(
    COUNTRIES.find((c) => c.country === "Nigeria")!
  );
  const { user, isReady } = useAuth();

  useEffect(() => {
    if (isReady && user) {
      supabase
        .from("profiles")
        .select("country")
        .eq("user_id", user.id)
        .single()
        .then(({ data }) => {
          if (data?.country) {
            const found = COUNTRIES.find((c) => c.country === data.country);
            if (found) setCurrencyState(found);
          }
        });
    }
  }, [isReady, user]);

  const setCurrency = (c: CountryCurrency) => {
    setCurrencyState(c);
    if (user) {
      supabase.from("profiles").update({ country: c.country }).eq("user_id", user.id).then(() => {});
    }
  };

  const formatPrice = (nairaAmount: number) => {
    const rate = RATES[currency.code] || 1;
    const converted = nairaAmount * rate;
    if (currency.code === "NGN") return `₦${nairaAmount.toLocaleString()}`;
    return `${currency.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};
