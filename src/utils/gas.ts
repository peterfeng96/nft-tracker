const apiGateway = "https://pms5jhuib7.execute-api.us-east-2.amazonaws.com/dev";

export async function getEthPrice(): Promise<number> {
  try {
    const response = await fetch(
      "https://api.coinbase.com/v2/exchange-rates?currency=ETH"
    );
    const body = await response.json();
    return parseFloat(body.data.rates.USD);
  } catch (e) {
    console.log("Error getting ETH price from coinbase.");
    return 0;
  }
}

type GetEthGas = {
  gasPrice: number;
  history: {
    oldestBlock: number;
    average: number;
    base: number[];
    priority: number[];
  };
};

export async function getEthGas(): Promise<GetEthGas> {
  try {
    const response = await fetch(`${apiGateway}/gas`);
    const body = await response.json();
    return body;
  } catch (e) {
    console.log("Error getting ETH gas");
    throw e;
  }
}
