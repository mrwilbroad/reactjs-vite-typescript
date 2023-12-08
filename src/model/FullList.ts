import Listitem from "./Listitem";
interface List {
  list: Listitem[];
  load(): void;
  save(): void;
  clearList(): void;
  PushItem(itemObj: Listitem): void;
  removeItem(id: string): void;
}
export const STORAGE_NAME = "USER_ITEM_LIST";

export type ItemListType = { _id: string; _item: string; _checked: boolean }[];

export default class FullList implements List {
  /**
   *
   */
  static instance: FullList = new FullList();

  /**
   *
   */

  /**
   *
   * @param _list
   */
  constructor(public _list: Listitem[] = []) {
    this._list = _list;
  }

  /**
   *
   */
  get list(): Listitem[] {
    return this._list;
  }

  /**
   *
   */
  load(): void {
    const storedList: string | null = localStorage.getItem(STORAGE_NAME);
    if (typeof storedList !== "string") {
      return;
    }
    const parsedList: ItemListType = JSON.parse(storedList);
    parsedList.forEach((item) => {
      const NewItemList = new Listitem(item._id, item._item, item._checked);
      FullList.instance.PushItem(NewItemList);
    });
  }

  /**
   *
   */
  save(): void {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(this.list));

    console.log(localStorage.getItem(STORAGE_NAME))
  }

  /**
   *Empty @itemList
   */
  clearList(): void {
    this._list = [];
    this.save();
  }

  /**
   * @param itemObj
   */
  PushItem(itemObj: Listitem): void {
    this._list.push(itemObj);
    console.log(itemObj)
    this.save();
  }

  /**
   * Remove item from @itemList
   * @param id
   */
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
