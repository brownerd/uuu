'use babel';

import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

import valueArray from './array-from-sassvars';

import uiExportStyles from './ui-export-styles';
import uiImportStyles from './ui-import-styles';

import syntaxExportStyles from './syntax-export-styles';
import syntaxImportStyles from './syntax-import-styles';


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

      'uuu:uiImportStyles': () => uiImportStyles()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
