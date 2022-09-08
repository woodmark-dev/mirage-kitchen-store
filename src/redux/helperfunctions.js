export const findItem = (categories, currentItem) =>
  categories.find((item) => item.id === currentItem.id);

export const filterItems = (categories, matchedItem) =>
  categories.filter((item) => item.id !== matchedItem.id);

export const searchItem = (allItems, itemChange) =>
  allItems.find((item) => item.id === itemChange.id);

export const computePrice = (items) =>
  items
    .map(({ price, quantity }) => price * quantity)
    .reduce((curr, item) => curr + item, 0);

export const cartTotal = (items) =>
  items.map((item) => item.quantity).reduce((curr, next) => curr + next, 0);
