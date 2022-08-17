// pages/api/my10y.tsx
/*import { Prisma, PrismaClient } from "@prisma/client";

let prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;

prisma = new PrismaClient();

//export default prisma;

export default async function handle(req: any, res: { json: (arg0: any) => void; }) {
  const my10y = await prisma.fRED_Market_Yield_10Y.findMany();
  res.json(my10y);
}*/

export default async function handle(req: any, res: { json: (arg0: any) => void; }) {
  return [];
}
// pages/api/economic-data.js
//import prisma from "../../../lib/prisma";
/*import { FRED_Market_Yield_10Y, PrismaClient } from '@prisma/client';

export default async function req: any, res: { json: (arg0: FRED_Market_Yield_10Y[]) => void; }) {

  req = "";
  const prisma = new PrismaClient();
  const marketYield10YTable = await prisma.fRED_Market_Yield_10Y.findMany();
  res.json(marketYield10YTable);*/
  /*handleCommodity(req,res);
  handleCPI(req,res);
  handleCPIAveragePrice(req,res);
  handleCrypto(req,res);
  handleForex(req, res);
  const commodityTable = await prisma.cOMMODITY.findMany();
  return commodityTable;
  handleConsumerCredit(req, res);
  handleConsumerLoans(req, res);
  handleEFFR(req, res);
  handleGDP(req, res);
  handleMarketYield01Y(req, res);
  handleMarketYield02Y(req, res);*/
  //handleMarketYield10Y(req, res);
  /*handleMortgage15Y(req, res);
  handleMortgage30Y(req, res);
  handleNationalDataCanada(req, res);
  handleNationalDataChina(req, res);
  handleNationalDataGermany(req, res);
  handleNationalDataIndia(req, res);
  handleNationalDataJapan(req, res);
  handleNationalDataSouthKorea(req, res);
  handleNationalDataUnitedKingdom(req, res);
  handleNationalTotalQuits(req, res);
  handleNationalDataTotalUnfilledJobVacancies(req, res);
  handleNationalDataUnemploymentRate(req, res);
  handleINDEX(req, res);
  handleSTOCK(req, res);*/
//}

/*export default async function handleCommodity(req, res) {
  const commodityTable = await prisma.COMMODITY.findMany();
  res.json(commodityTable);
}

export default async function handleCPI(req, res) {
  const cpiTable = await prisma.CPI.findMany();
  res.json(cpiTable);
}

export default async function handleCPIAveragePrice(req, res) {
  const cpiAveragePriceTable = await prisma.CPI_Average_Price.findMany();
  res.json(cpiAveragePriceTable);
}

export default async function handleCrypto(req, res) {
  const cryptoTable = await prisma.CRYPTO.findMany();
  res.json(cryptoTable);
}

export default async function handleForex(req, res) {
  const forexTable = await prisma.FOREX.findMany();
  res.json(forexTable);
}

export default async function handleConsumerCredit(req, res) {
  const consumerCreditTable = await prisma.FRED_Consumer_Credit_Owned_And_Securitized.findMany();
  res.json(consumerCreditTable);
}

export default async function handleConsumerLoans(req, res) {
  const consumerLoansTable = await prisma.FRED_Consumer_Loans.findMany();
  res.json(consumerLoansTable);
}

export default async function handleEFFR(req, res) {
  const effrTable = await prisma.FRED_Effective_Federal_Funds_Rate.findMany();
  res.json(effrTable);
}

export default async function handleGDP(req, res) {
  const gdpTable = await prisma.FRED_GDP.findMany();
  res.json(gdpTable);
}

export default async function handleMarketYield01Y(req, res) {
  const marketYield01YTable = await prisma.FRED_Market_Yield_01Y.findMany();
  res.json(marketYield01YTable);
}

export default async function handleMarketYield02Y(req, res) {
  const marketYield02YTable = await prisma.FRED_Market_Yield_02Y.findMany();
  res.json(marketYield02YTable);
}*/

/*async function handleMarketYield10Y(req, res) {
  const marketYield10YTable = await prisma.FRED_Market_Yield_10Y.findMany();
  res.json(marketYield10YTable);
}*/
/*
export default async function handleMortgage15Y(req, res) {
  const mortgage15YTable = await prisma.FRED_Mortgage_15Y.findMany();
  res.json(mortgage15YTable);
}

export default async function handleMortgage30Y(req, res) {
  const mortgage30YTable = await prisma.FRED_Mortgage_30Y.findMany();
  res.json(mortgage30YTable);
}

export default async function handleNationalDataCanada(req, res) {
  const nationalDataCanadaTable = await prisma.FRED_National_Data_Canada.findMany();
  res.json(nationalDataCanadaTable);
}

export default async function handleNationalDataChina(req, res) {
  const nationalDataChina = await prisma.FRED_National_Data_China.findMany();
  res.json(nationalDataChinaTable);
}

export default async function handleNationalDataGermany(req, res) {
  const nationalDataGermanyTable = await prisma.FRED_National_Data_Germany.findMany();
  res.json(nationalDataGermanyTable);
}

export default async function handleNationalDataIndia(req, res) {
  const nationalDataIndiaTable = await prisma.FRED_National_Data_India.findMany();
  res.json(nationalDataIndiaTable);
}

export default async function handleNationalDataJapan(req, res) {
  const nationalDataJapanTable = await prisma.FRED_National_Data_Japan.findMany();
  res.json(nationalDataJapanTable);
}

export default async function handleNationalDataSouthKorea(req, res) {
  const nationalDataSouthKoreaTable = await prisma.FRED_National_Data_South_Korea.findMany();
  res.json(nationalDataSouthKoreaTable);
}

export default async function handleNationalDataUnitedKingdom(req, res) {
  const nationalDataUnitedKingdomTable = await prisma.FRED_National_Data_United_Kingdom.findMany();
  res.json(nationalDataUnitedKingdomTable);
}

export default async function handleNationalTotalQuits(req, res) {
  const totalQuitsTable = await prisma.FRED_Total_Quits.findMany();
  res.json(totalQuitsTable);
}

export default async function handleNationalDataTotalUnfilledJobVacancies(req, res) {
  const totalUnfilledJobVacanciesTable = await prisma.FRED_Total_Unfilled_Job_Vacancies.findMany();
  res.json(totalUnfilledJobVacanciesTable);
}

export default async function handleNationalDataUnemploymentRate(req, res) {
  const unemploymentRateTable = await prisma.FRED_National_Data_Unemployment_Rate.findMany();
  res.json(unemploymentRateTable);
}

export default async function handleINDEX(req, res) {
  const indexTable = await prisma.INDEX.findMany();
  res.json(indexTable);
}

export default async function handleSTOCK(req, res) {
  const STOCKTable = await prisma.STOCK.findMany();
  res.json(STOCKTable);
}*/