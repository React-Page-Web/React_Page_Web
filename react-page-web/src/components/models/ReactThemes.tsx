export default class ReactThemes{
  id: number;
  title: string;
  description: string;
  tag: string;
  price: number;
  sales: number;
  downloads: number;
  notation: number;

  constructor (
    id: number,
    title: string,
    description: string,
    tag: string,
    price: number,
    sales: number,
    downloads: number,
    notation: number
    ){
      this.id = id;
      this.title = title;
      this.description = description;
      this.tag = tag;
      this.price = price;
      this.sales = sales;
      this.downloads = downloads;
      this.notation = notation;
    }
}