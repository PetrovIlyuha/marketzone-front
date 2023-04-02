export const currencyByCountry: CountryCurrencyMap = {
  US: { name: "United States", currency: "USD" },
  GB: { name: "United Kingdom", currency: "GBP" },
  ES: { name: "Spain", currency: "EUR" },
  FR: { name: "France", currency: "EUR" },
  DE: { name: "Germany", currency: "EUR" },
  IT: { name: "Italy", currency: "EUR" },
  PT: { name: "Portugal", currency: "EUR" },
  JP: { name: "Japan", currency: "JPY" },
  KR: { name: "South Korea", currency: "KRW" },
  CN: { name: "China", currency: "CNY" },
  IN: { name: "India", currency: "INR" },
  ID: { name: "Indonesia", currency: "IDR" },
  RU: { name: "Russia", currency: "RUB" },
  TR: { name: "Turkey", currency: "TRY" },
  SA: { name: "Saudi Arabia", currency: "SAR" },
  BR: { name: "Brazil", currency: "BRL" },
  CA: { name: "Canada", currency: "CAD" },
  MX: { name: "Mexico", currency: "MXN" },
  AU: { name: "Australia", currency: "AUD" },
  ZA: { name: "South Africa", currency: "ZAR" },
  TH: { name: "Thailand", currency: "THB" },
  VN: { name: "Vietnam", currency: "VND" },
  PL: { name: "Poland", currency: "PLN" },
  UA: { name: "Ukraine", currency: "UAH" },
  NL: { name: "Netherlands", currency: "EUR" },
  SE: { name: "Sweden", currency: "SEK" },
  FI: { name: "Finland", currency: "EUR" },
  NO: { name: "Norway", currency: "NOK" },
  DK: { name: "Denmark", currency: "DKK" },
  CZ: { name: "Czech Republic", currency: "CZK" },
  SK: { name: "Slovakia", currency: "EUR" },
  HU: { name: "Hungary", currency: "HUF" },
  RO: { name: "Romania", currency: "RON" },
  BG: { name: "Bulgaria", currency: "BGN" },
  GR: { name: "Greece", currency: "EUR" },
  HR: { name: "Croatia", currency: "HRK" },
  RS: { name: "Serbia", currency: "RSD" },
};

export type CountryCurrencyMap = {
  [key: string]: {
    name: string;
    currency: string;
  };
};
