export type FistBoxData = {
  id: number;
  title: string;
  total: number;
}[];

export type SecondBoxData = {
  id: number;
  title: string;
  subData: {
    id: number;
    title: string;
  }[];
}[];

export type ContentDataTypes = {
  id: number;
  image: string;
  title: string;
  name: string;
  price: string;
  watt: string;
}[];
