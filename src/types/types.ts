export interface ItemType {
  id?: number;
  originId?: number;
  title: string;
  img: string;
  price: number;
}

export interface OrderItemType {
  id?: number;
  total?: number;
  items: Array<ItemType>;
  address: string;
}
