function numberCheck(number, defaultNumber) {
  if (number === undefined) {
    return defaultNumber;
  }

  const checkedNum = parseInt(number);

  if (Number.isNaN(checkedNum)) {
    return defaultNumber;
  }
  return checkedNum;
}

export function parsePagParams(data) {
  const { page, perPage } = data;

  const pageParsed = numberCheck(page, 1);
  const perPageParsed = numberCheck(perPage, 5);

  return {
    page: pageParsed,
    perPage: perPageParsed,
  };
}
