'use babel';

import path from 'path';
import storage from 'electron-json-storage';

import exportStyles from './promise-to-read';
import runPreset from './run-presets';


// Warning message for empty user themes
const emptyUserThemeWarning = `You need to save to this slot before you can use it`;


export const saveTheme = (key, uiPath, syntaxPath) => {

  let dataUI = exportStyles(uiPath);
  let dataSyntax = exportStyles(syntaxPath);

  let formatData = (ui, syntax) => {
    return {
      theme: {
        ui,
        syntax
      }
    }
  }

  Promise.all([dataUI, dataSyntax]).then(values => {

    storage.set(key, formatData(values[0], values[1]), (error) => {
      if (error) {
        atom.notifications.addWarning(error);
      }
      else {
        atom.notifications.addSuccess('Preset saved!', {detail: 'Stay awesome!', dismissable: true});
      }
    });

  }).catch(error => {atom.notifications.addWarning(error)});

}

export const useTheme = (key) => {

  storage.get(key, (error, dataObj) => {
    if (error) {
      atom.notifications.addWarning('Oh snap!', {detail: emptyUserThemeWarning, dismissable: true});
    }

    //console.log(data);
    runPreset(dataObj);
  });

}
