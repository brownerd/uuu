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

import melowdrama from './presets/melowdrama';
import amir from './presets/amir';
import raji from './presets/raji';
import jabari from './presets/jabari';
import superNES from './presets/nintendo';
import tmntd from './presets/tmnt-donetello';
import strangerThings from './presets/strangerthings';
import crockford from './presets/crockford';
import cardinals from './presets/cardinals';
import princessPeach from './presets/princess-peach';
// one more space

import schmaterial from './presets/schmaterial';
import airMax90 from './presets/airmax90';
import airMax95 from './presets/airmax95';
import miamiVice from './presets/miamivice';

import darkness from './presets/darkness';
import brownerd from './presets/brownerd';
import cacao from './presets/cacao';

import naturel from './presets/naturel';
import original1 from './presets/original-1';
import original2 from './presets/original-2';
import boson from './presets/z-boson';



import runPreset from './run-presets';

// Enable users to Save and use themes
import {saveTheme, useTheme} from './save-theme';

// Path to UUU Syntax stylesheet
const syntaxPath = `${atom.packages.getLoadedPackage('uuu-syntax').path}/styles/uuu.less`;
// Path to UUU UI stylesheet
const uiPath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

export default {
  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {

      // Syntax Import and Export
      'uuu:syntaxImportStyles': () => importStyles('syntax'),
      'uuu:syntaxExportStyles': () => exportStyles(syntaxPath),

      // UI Import and Export
      'uuu:uiImportStyles': () => importStyles('ui'),
      'uuu:uiExportStyles': () => exportStyles(uiPath),

      // Font Check and Sync
      'uuu:fontcheck': () => fontcheck(),
      'uuu:fontsync': () => fontsync(),

      // Reload Window
      'uuu:reloadWindow': () => reloadWindow(),

      // Run Core Presets
      'uuu:runPreset1': () => runPreset(melowdrama),
      'uuu:runPreset2': () => runPreset(amir),
      'uuu:runPreset3': () => runPreset(raji),
      'uuu:runPreset4': () => runPreset(jabari),
      'uuu:runPreset5': () => runPreset(superNES),
      'uuu:runPreset6': () => runPreset(tmntd),
      'uuu:runPreset7': () => runPreset(strangerThings),
      'uuu:runPreset8': () => runPreset(crockford),
      'uuu:runPreset9': () => runPreset(cardinals),
      'uuu:runPreset10': () => runPreset(princessPeach),

      // Run Secondary Presets
      'uuu:runPreset11': () => runPreset(schmaterial),
      'uuu:runPreset12': () => runPreset(airMax90),     // nope
      'uuu:runPreset13': () => runPreset(airMax95),     // nope
      'uuu:runPreset14': () => runPreset(miamiVice),
      'uuu:runPreset15': () => runPreset(brownerd),
      'uuu:runPreset16': () => runPreset(cacao),
      'uuu:runPreset17': () => runPreset(naturel),
      'uuu:runPreset18': () => runPreset(original1),
      'uuu:runPreset19': () => runPreset(original2),    // nope
      'uuu:runPreset20': () => runPreset(boson),        // nope

      // Save User's Presets
      'uuu:saveTheme1': () => saveTheme('uuurTheme1', uiPath, syntaxPath),
      'uuu:saveTheme2': () => saveTheme('uuurTheme2', uiPath, syntaxPath),
      'uuu:saveTheme3': () => saveTheme('uuurTheme3', uiPath, syntaxPath),
      'uuu:saveTheme4': () => saveTheme('uuurTheme4', uiPath, syntaxPath),
      'uuu:saveTheme5': () => saveTheme('uuurTheme5', uiPath, syntaxPath),
      'uuu:saveTheme6': () => saveTheme('uuurTheme6', uiPath, syntaxPath),
      'uuu:saveTheme7': () => saveTheme('uuurTheme7', uiPath, syntaxPath),
      'uuu:saveTheme8': () => saveTheme('uuurTheme8', uiPath, syntaxPath),
      'uuu:saveTheme9': () => saveTheme('uuurTheme9', uiPath, syntaxPath),
      'uuu:saveTheme10': () => saveTheme('uuurTheme10', uiPath, syntaxPath),

      'uuu:useTheme1': () => useTheme('uuurTheme1'),
      'uuu:useTheme2': () => useTheme('uuurTheme2'),
      'uuu:useTheme3': () => useTheme('uuurTheme3'),
      'uuu:useTheme4': () => useTheme('uuurTheme4'),
      'uuu:useTheme5': () => useTheme('uuurTheme5'),
      'uuu:useTheme6': () => useTheme('uuurTheme6'),
      'uuu:useTheme7': () => useTheme('uuurTheme7'),
      'uuu:useTheme8': () => useTheme('uuurTheme8'),
      'uuu:useTheme9': () => useTheme('uuurTheme9'),
      'uuu:useTheme10': () => useTheme('uuurTheme10')

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
