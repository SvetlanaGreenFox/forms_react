export function sortDates(array) {
  if (array.length > 1) {
    return array.sort(function (a, b) {
      return (
        new Date(b.date.split(".").reverse().join("-")) -
        new Date(a.date.split(".").reverse().join("-"))
      );
    });
  }
}
