'use babel';

export default function (pathToFile, arr, encoding) {
  return new Promise(
    function (resolve, reject) {
      fs.writeFile(
        pathToFile,
        arr.map(item => `${item.sassvar}: ${item.value};`).join('\n'),
        encoding,
        (err) => {console.log(err ? `Error: ${err}` : 'ok');}
      );
    }
  )
}
