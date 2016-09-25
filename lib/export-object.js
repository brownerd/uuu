'use babel';

import promiseToRead from './promise-to-read';
import {syntaxPath, uiPath} from './paths';

const themeObjectMaker = (ui, syntax) => {
  return {
    theme: {
      ui: ui,
      syntax: syntax
    }
  }
};

export default () => {

  console.log(syntaxPath, uiPath);

  const dataUI = promiseToRead(uiPath);
  const dataSyntax = promiseToRead(syntaxPath);

  Promise.all([dataUI, dataSyntax]).then(values => {

    const obj = themeObjectMaker(values[0], values[1]);
    atom.notifications.addSuccess('Booyah!', {detail: JSON.stringify(obj, null, '  ') , dismissable: true});

  }).catch(error => {atom.notifications.addWarning(error)});

};
