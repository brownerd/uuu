'use babel';

// Utilities
import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

// Import and export functions
import exportStyles from './export-styles';
import importStyles from './import-styles';

// Font management functions
import fontcheck from './font-check.js';
import fontsync from './font-sync.js';

// Window reload function
import reloadWindow from './reload-window';

//Presets
import runpreset from './run-presets';

// Make 9 presets available
import {schmaterialSyntax, schmaterialUI} from './presets/schmaterial';
import {strangerthingsSyntax, strangerthingsUI} from './presets/strangerthings';
import {nintendoSyntax, nintendoUI} from './presets/nintendo';
import {crockfordSyntax, crockfordUI} from './presets/crockford';
import {airmax95Syntax, airmax95UI} from './presets/airmax95';
import {miamiviceSyntax, miamiviceUI} from './presets/miamivice';
import {princessPeachSyntax, princessPeachUI} from './presets/princess-peach';
import {brownerdSyntax, brownerdUI} from './presets/brownerd';
import {cardinalsSyntax, cardinalsUI} from './presets/cardinals';

// Set up empty themes for users to save to
import {uuurThemeSyntax1, uuurThemeUI1} from './presets/uuur-theme-1';
import {uuurThemeSyntax2, uuurThemeUI2} from './presets/uuur-theme-2';
import {uuurThemeSyntax3, uuurThemeUI3} from './presets/uuur-theme-3';

import saveTheme from './save-theme';

// Path to UUU Syntax stylesheet
const syntaxPath = `${atom.packages.getLoadedPackage('uuu-syntax').path}/styles/uuu.less`;
// Path to UUU UI stylesheet
const uiPath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

// Warning message for empty user themes
const emptyUserThemeWarning = `You need to save to this slot before you can use it`;

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

      'uuu:usetheme1': () => {
        if (!uuurThemeSyntax1) {
          atom.notifications.addWarning('Oh snap!', {detail: emptyUserThemeWarning, dismissable: true});
        }
        else {
          runpreset(uuurThemeSyntax1, uuurThemeUI1)
        }
      },
      'uuu:usetheme2': () => {
        if (!uuurThemeSyntax2) {
          atom.notifications.addWarning('Oh snap!', {detail: emptyUserThemeWarning, dismissable: true});
        }
        else {
          runpreset(uuurThemeSyntax2, uuurThemeUI2)
        }
      },
      'uuu:usetheme3': () => {
        if (!uuurThemeSyntax3) {
          atom.notifications.addWarning('Oh snap!', {detail: emptyUserThemeWarning, dismissable: true});
        }
        else {
          runpreset(uuurThemeSyntax3, uuurThemeUI3)
        }
      },

      // Save User's Presets
      'uuu:savetheme1': () => saveTheme(syntaxPath, uiPath, 1),
      'uuu:savetheme2': () => saveTheme(syntaxPath, uiPath, 2),
      'uuu:savetheme3': () => saveTheme(syntaxPath, uiPath, 3)

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
