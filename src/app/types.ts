export type Nft = {
  contractAddress: string;
  contractName: string;
  floorPrice: number;
  name: string;
  tokenId: string;
  url: string;
};

export type ItemProps = {
  metadata: Nft;
};

export type GraphProps = {
  oldestBlock: number;
  base: number[];
  priority: number[];
};

export type CardProps = {
  title: string;
  keys: string[];
  values: (string | number)[];
};
