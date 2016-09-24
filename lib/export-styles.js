'use babel';

import promiseToRead from './promise-to-read';

export default (pathToRead) => {
  promiseToRead(pathToRead).then( data => {
      atom.notifications.addSuccess('Success', {detail: data, dismissable: true});
    }
  ).catch(error => {
    atom.notifications.addWarning(error)
  })
}
