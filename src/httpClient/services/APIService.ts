
interface Item {
  id: number,
  name: string,
  price: number
}

export interface ItemAPIServiceOptions {
  list?(page: number, pageSize: number): Promise<{
    pageNumber: number,
    total: number,
    items: Item[]
  } | null>;
  get?(itemId: number): Promise<Item | null>;
  create?(item: Item): Promise<Item>;
  update?(itemId: number, item: Partial<Item>): Promise<Item>;
  delete?(itemId: number): Promise<void>;
}

export class APIService {
  list?: (page: number, pageSize: number) => Promise<{ pageNumber: number; total: number; items: Item[]} | null>;
  get?: (itemId: number) => Promise<Item | null>;
  create?: (item: Item) => Promise<Item>;
  update?: (itemId: number, item: Partial<Item>) => Promise<Item>;
  delete?: (itemId: number) => Promise<void>;

  constructor(options: ItemAPIServiceOptions) {
    this.list = options.list;
    this.get = options.get;
    this.create = options.create;
    this.update = options.update;
    this.delete = options.delete;
  }
}