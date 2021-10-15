/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const locale = ['ru', 'en'];
  const upper = {caseFirst: 'upper'};
  const diretions = {
    asc: 1,
    desc: -1
  }
  const direction = diretions[param];

  // if (param === 'asc') {
  //   return [...arr].sort((a, b) =>
  //     a.localeCompare(b, locale, upper)
  //   );
  // }
  // if (param === 'desc') {
  //   return [...arr].sort((a, b) =>
  //     b.localeCompare(a, locale, upper)
  //   );
  // }

  return [...arr].sort((a, b) => {
    return diretion * a.localeCompare(b, locale, upper);
  });
}
