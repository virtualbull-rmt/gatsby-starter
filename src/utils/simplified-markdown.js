export default function (input) {
  //markdown link
  return input.replace(/\[(.+?)\]\((.+?)\)/g, (match, $1, $2) => {
    return `<a href="${$2}">${$1}</a>`;
  });
}