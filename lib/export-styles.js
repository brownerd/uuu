'use babel';

const uipath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

export default function (path) {
  //atom.notifications.addSuccess('Success', {detail: uipath, dismissable: true});

  return new Promise(
    function (resolve, reject) {
      fs.readFile(
        uipath,
        'utf8',
        (err, data) => {
          if (err) {
            atom.notifications.addWarning(err.reason);
          }
          atom.notifications.addSuccess('Success', {detail: data.toString(), dismissable: true});
        }
      );
    }
  )

}
