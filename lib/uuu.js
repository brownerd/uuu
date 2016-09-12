'use babel';

import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

// import valueArray from './array-from-sassvars';

import syntaxExportStyles from './syntax-export-styles';
import syntaxImportStyles from './syntax-import-styles';

import uiExportStyles from './ui-export-styles';
import uiImportStyles from './ui-import-styles';

import fontcheck from './font-check.js';
import fontsync from './font-sync.js';
import reloadWindow from './reload-window';


export default {
  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {

      'uuu:syntaxExportStyles': () => syntaxExportStyles().then( data => {
          atom.notifications.addSuccess('Success', {detail: data, dismissable: true});
          //const resultJSON = JSON.stringify(valueArray(data));
          //atom.notifications.addSuccess('Success', {detail: resultJSON, dismissable: true});
        }
      ).catch(error => {atom.notifications.addWarning(error.reason)}),


      'uuu:syntaxImportStyles': () => syntaxImportStyles(),

      'uuu:uiExportStyles': () => uiExportStyles().then( data => {
          atom.notifications.addSuccess('Success', {detail: data, dismissable: true});
          //const resultJSON = JSON.stringify(valueArray(data));
          //atom.notifications.addSuccess('Success', {detail: resultJSON, dismissable: true});
        }
      ).catch(error => {atom.notifications.addWarning(error.reason)}),


      'uuu:uiImportStyles': () => uiImportStyles(),


      'uuu:fontcheck': () => fontcheck(),


      'uuu:fontsync': () => fontsync(),


      'uuu:reloadWindow': () => reloadWindow()

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
