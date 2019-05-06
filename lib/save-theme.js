'use babel';

// https://github.com/electron-userland/electron-json-storage

import path from 'path';
import storage from 'electron-json-storage';

import exportStyles from './promise-to-read';
import runPreset from './run-presets';

import {syntaxPath, uiPath} from './paths';


export const saveTheme = (key) => {

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
      atom.notifications.addWarning('This slot is empty buddy!', {
        detail: "Please save a theme to this slot before using. Thx!",
        dismissable: true
      });
    }

    // console.log(dataObj);
    runPreset(dataObj);
  })
}
