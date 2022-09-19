export interface BaseRepository<K> {
  addItem(item: K): K;
  deleteItem(id: string): boolean;
  updateItem(id: string, item: K): K;
  getElementById(id: string): K;
  getAllItems(): Array<K>;
}
