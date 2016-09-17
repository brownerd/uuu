'use babel';

import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

import exportStyles from './export-styles';
import importStyles from './import-styles';

import fontcheck from './font-check.js';
import fontsync from './font-sync.js';
import reloadWindow from './reload-window';

const syntaxPath = `${atom.packages.getLoadedPackage('uuu-syntax').path}/styles/uuu.less`;
const uiPath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

//Presets
import runpreset from './run-presets';

import {schmaterialSyntax, schmaterialUI} from './presets/schmaterial';
import {strangerthingsSyntax, strangerthingsUI} from './presets/strangerthings';
import {nintendoSyntax, nintendoUI} from './presets/nintendo';
import {crockfordSyntax, crockfordUI} from './presets/crockford';
import {airmax95Syntax, airmax95UI} from './presets/airmax95';
import {miamiviceSyntax, miamiviceUI} from './presets/miamivice';
import {princessPeachSyntax, princessPeachUI} from './presets/princess-peach';
import {brownerdSyntax, brownerdUI} from './presets/brownerd';
import {cardinalsSyntax, cardinalsUI} from './presets/cardinals';

import {preset1Syntax, preset1UI} from './presets/preset-1';
import {preset2Syntax, preset2UI} from './presets/preset-2';
import {preset3Syntax, preset3UI} from './presets/preset-3';

import savePreset from './save-preset';


export default {
  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {

      // Syntax Import and Export
      'uuu:syntaxImportStyles': () => importStyles('syntax', 'New Syntax styles have been uploaded!'),
      'uuu:syntaxExportStyles': () => exportStyles(syntaxPath).then( data => {
          atom.notifications.addSuccess('Success', {detail: data, dismissable: true});
        }
      ).catch(error => {atom.notifications.addWarning(error.reason)}),

      // UI Import and Export
      'uuu:uiImportStyles': () => importStyles('ui', 'New UI styles have been uploaded!'),
      'uuu:uiExportStyles': () => exportStyles(uiPath).then( data => {
          atom.notifications.addSuccess('Success', {detail: data, dismissable: true});
        }
      ).catch(error => {atom.notifications.addWarning(error)}),

      // Font Check and Sync
      'uuu:fontcheck': () => fontcheck(),
      'uuu:fontsync': () => fontsync(),

      // Reload Window
      'uuu:reloadWindow': () => reloadWindow(),

      // Run Presets
      'uuu:runpreset1': () => runpreset(schmaterialSyntax, schmaterialUI),
      'uuu:runpreset2': () => runpreset(strangerthingsSyntax, strangerthingsUI),
      'uuu:runpreset3': () => runpreset(nintendoSyntax, nintendoUI),
      'uuu:runpreset4': () => runpreset(crockfordSyntax, crockfordUI),
      'uuu:runpreset5': () => runpreset(airmax95Syntax, airmax95UI),
      'uuu:runpreset6': () => runpreset(miamiviceSyntax, miamiviceUI),
      'uuu:runpreset7': () => runpreset(princessPeachSyntax, princessPeachUI),
      'uuu:runpreset8': () => runpreset(brownerdSyntax, brownerdUI),
      'uuu:runpreset9': () => runpreset(cardinalsSyntax, cardinalsUI),

      // Save User's Presets
      'uuu:savepreset1': () => savePreset(syntaxPath, uiPath, 1),

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
