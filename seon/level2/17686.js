function solution(files) {
  return files
    .map((file) => file.match(/[\D]+|[0-9]+/g))
    .sort((a, b) => a[0].toLocaleLowerCase().localeCompare(b[0].toLocaleLowerCase()) || a[1] - b[1])
    .map((file) => file.join(""));
}
