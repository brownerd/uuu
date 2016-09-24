'use babel';

export default function (pathToWrite) {

  return new Promise(
    function (resolve, reject) {
      fs.readFile(pathToWrite, 'utf8', (err, data) => {
        if (err) {
          reject(atom.notifications.addWarning(err.reason));
        }
        resolve(data.toString());
      });
    }
  )
}
