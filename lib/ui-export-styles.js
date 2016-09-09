'use babel';


import valueArray from './array-from-sassvars';
const uipath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

export default function () {
  //atom.notifications.addSuccess('Success', {detail: uipath, dismissable: true});

  return new Promise(
    function (resolve, reject) {
      fs.readFile(uipath, 'utf8', (err, data) => {
        if (err) {
          reject(atom.notifications.addWarning(err.reason));
        }
        resolve(data.toString());
      });
    }
  )
}
