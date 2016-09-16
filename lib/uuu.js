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

//Presets
import runpreset from './run-presets';

import {schmaterialSyntax, schmaterialUI} from './presets/schmaterial';
import {strangerthingsSyntax, strangerthingsUI} from './presets/strangerthings';
import {nintendoSyntax, nintendoUI} from './presets/nintendo';
import {crawfordSyntax, crawfordUI} from './presets/crawford';
import {typographySyntax, typographyUI} from './presets/typography';
import {miamiviceSyntax, miamiviceUI} from './presets/miamivice';
import {princessPeachSyntax, princessPeachUI} from './presets/princess-peach';
import {brownerdSyntax, brownerdUI} from './presets/brownerd';
import {cardinalsSyntax, cardinalsUI} from './presets/cardinals';


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

      'uuu:reloadWindow': () => reloadWindow(),

      'uuu:runpreset1': () => runpreset(schmaterialSyntax, schmaterialUI),
      'uuu:runpreset2': () => runpreset(strangerthingsSyntax, strangerthingsUI),
      'uuu:runpreset3': () => runpreset(nintendoSyntax, nintendoUI),
      'uuu:runpreset4': () => runpreset(crawfordSyntax, crawfordUI),
      'uuu:runpreset5': () => runpreset(typographySyntax, typographyUI),
      'uuu:runpreset6': () => runpreset(miamiviceSyntax, miamiviceUI),
      'uuu:runpreset7': () => runpreset(princessPeachSyntax, princessPeachUI),
      'uuu:runpreset8': () => runpreset(brownerdSyntax, brownerdUI),
      'uuu:runpreset9': () => runpreset(cardinalsSyntax, cardinalsUI)
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
