function parseSortKey(key) {
  const allkeys = [
    '_id',
    'name',
    'email',
    'phoneNumber',
    'isFavourite',
    'contactType',
    'createdAt',
    'updatedAt',
  ];

  if (allkeys.includes(key)) {
    return key;
  }

  return '_id';
}

function parseSortOrder(order) {
  const allOrders = ['asc', 'desc'];
  if (allOrders.includes(order)) {
    return order;
  }

  return 'asc';
}

export function parseSortParams(data) {
  const { sortBy, sortOrder } = data;
  const sortByParsed = parseSortKey(sortBy);
  const sortOrderParsed = parseSortOrder(sortOrder);

  console.log('parse', sortByParsed, sortOrderParsed);
  return { sortBy: sortByParsed, sortOrder: sortOrderParsed };
}
