var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  const salesTaxInfo = {};
  for (var i in salesData) {
    let companyName = salesData[i].name;
    let provinceName = salesData[i].province;
    let salesTotal = salesData[i].sales.reduce(function(accumulator, currentValue) {
                  return accumulator + currentValue;
              });
    let totalTaxes = salesTotal * taxRates[provinceName];

    if(salesTaxInfo[companyName] === undefined) {
      var totalInfo = {totalSales: salesTotal, totalTaxes: totalTaxes};
    } else {
      var totalInfo = {totalSales: (salesTaxInfo[companyName].totalSales +
          salesTotal), totalTaxes: salesTaxInfo[companyName].totalTaxes +
          totalTaxes};
    }
    salesTaxInfo[companyName] = totalInfo;
  }
    console.log(salesTaxInfo);
  //return salesTax;
}
//var results = calculateSalesTax(companySalesData, salesTaxRates);
calculateSalesTax(companySalesData, salesTaxRates);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/