export const findOrThrow = <ItemType>(
  source: ItemType[],
  searchFn: (item: ItemType) => boolean
): ItemType => {
  const item = source.find(searchFn);

  if (!item) {
    throw new Error('Item not found');
  }
  return item;
};
