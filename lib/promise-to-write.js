'use babel';

export default function (pathToFile, data, encoding) {
  return new Promise(
    function (resolve, reject) {
      fs.writeFile(
        pathToFile,
        data,
        encoding,
        (err, data) => {
          if (err) {
            reject(atom.notifications.addWarning(err.reason));
          }
          resolve(data);
        }
      );
    }
  )
}
