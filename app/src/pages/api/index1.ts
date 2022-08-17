//import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';


//const prisma = new PrismaClient();

async function main(this: any) {

  /*const my01y= await prisma.fRED_Market_Yield_01Y.findMany();
  const my02y = await prisma.fRED_Market_Yield_02Y.findMany();

  const my_01y = [];
  const my_02y = [];*/

  /*const commodity = await prisma.cOMMODITY.findMany();
  const commodity_rate = [];*/

    /*const stock = await prisma.sTOCK.findMany();
    const mortgage15y= await prisma.fRED_Mortgage_15Y.findMany();
    const mortgage30y = await prisma.fRED_Mortgage_30Y.findMany();

    const stock_volume_upro = [];
    const stock_pc_upro = [];
    const stock_ph_upro = [];
    const stock_pl_upro = [];
    const stock_po_upro = [];

    const stock_volume_spy = [];
    const stock_pc_spy = [];
    const stock_ph_spy = [];
    const stock_pl_spy = [];
    const stock_po_spy = [];*/

    //const mortgage_15y = [];
    //const mortgage_30y = [];


  /** Stocks */
  /*for(let datum in stock) {
    if(stock[datum].Symbol=="UPRO") {
      stock_volume_upro.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Volume});
      stock_po_upro.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_Open});
      stock_pc_upro.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_Close});
      stock_ph_upro.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_High});
      stock_pl_upro.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_Low});
    } else if(stock[datum].Symbol=="SPY") {
      stock_volume_spy.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Volume});
      stock_po_spy.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_Open});
      stock_pc_spy.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_Close});
      stock_ph_spy.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_High});
      stock_pl_spy.push({"x": getDateTime(stock[datum].DateTime), "y": stock[datum].Price_Low});
    }
  }

  makeString(stock_volume_upro,"stock_volume_upro");
  makeString(stock_po_upro,"stock_po_upro");
  makeString(stock_pc_upro,"stock_pc_upro");
  makeString(stock_ph_upro,"stock_ph_upro");
  makeString(stock_pl_upro,"stock_pl_upro");

  makeString(stock_volume_spy,"stock_volume_spy");
  makeString(stock_po_spy,"stock_po_spy");
  makeString(stock_pc_spy,"stock_pc_spy");
  makeString(stock_ph_spy,"stock_ph_spy");
  makeString(stock_pl_spy,"stock_pl_spy");*/


    /** Commodities */
   /*for(let datum in commodity) {
      commodity_rate.push({"Symbol":commodity[datum].Symbol, "x": getDateTime(commodity[datum].DateTime), "y": commodity[datum].Rate});
    }
  
    makeString(commodity_rate,"commodity_rate");*/

  /** Mortgages */
  /*for(let datum in my01y) {
      my_01y.push({"x": getDate(my01y[datum].DateTime), "y": my01y[datum].Value});
  }
  for(let datum in my02y) {
      my_02y.push({"x": getDate(my02y[datum].DateTime), "y": my02y[datum].Value});
  }

  makeString(my_01y,"my_01y");
  makeString(my_02y,"my_02y");*/
  /*const crypto = await prisma.cRYPTO.findMany();

  const crypto_vol = [];

  for(let datum in crypto) {
    crypto_vol.push({"x": getDateTime(crypto[datum].DateTime), "y": crypto[datum].Volume});
  }

  makeString(crypto_vol,"crypto_vol");*/

  return [];
}



/**Functions */
function makeString(myArr: any[], fileName: string) {
  var dictstring = JSON.stringify( myArr, (key, value) => typeof value === 'bigint' ? value.toString(): value);
  fs.writeFile(fileName+".json", dictstring, function(){});
}

function getDateTime(date: Date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes()) /*+ ":" + date.getSeconds()*/;
}

function getDate(date: Date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/*main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})*/