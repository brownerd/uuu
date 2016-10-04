'use babel';

// Utilities
import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

// Import and export functions
import exportStyles from './export-styles';
import importStyles from './import-styles';

// Import and export theme object
import exportThemeObject from './export-object';
import importThemeObject from './import-object';

// Font management functions
import fontcheck from './font-check.js';
import fontsync from './font-sync.js';

// Window reload function
import reloadWindow from './reload-window';

//Dark themes
import melowdrama from './presets/melowdrama';
import amir from './presets/amir';
import raji from './presets/raji';
import jabari from './presets/jabari';
import darkness from './presets/darkness';
import cacao from './presets/cacao';
import cardinals from './presets/cardinals';



// Light themes
import tmntd from './presets/tmnt-donetello';
import superNES from './presets/nintendo';
import princessPeach from './presets/princess-peach';
import miamiVice from './presets/miamivice';
import brownerd from './presets/brownerd';
import crockford from './presets/crockford';
import airMax95 from './presets/airmax95';



// me only
import original1 from './presets/original-1';
import original2 from './presets/original-2';

// I wont include these
import schmaterial from './presets/schmaterial';  // material theme knockoff
import strangerThings from './presets/strangerthings';
import naturel from './presets/naturel';
import airMax90 from './presets/airmax90';
import boson from './presets/z-boson';



import runPreset from './run-presets';

// Enable users to Save and use themes
import {saveTheme, useTheme} from './save-theme';

import {syntaxPath, uiPath} from './paths';


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

      // Theme Object Import and Export
      'uuu:importThemeObject': () => importThemeObject(),
      'uuu:exportThemeObject': () => exportThemeObject(),

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
      'uuu:runPreset5': () => runPreset(darkness),
      'uuu:runPreset6': () => runPreset(cacao),
      'uuu:runPreset7': () => runPreset(cardinals),

      // 'uuu:runPreset8': () => runPreset(cardinals),
      // 'uuu:runPreset9': () => runPreset(cardinals),
      // 'uuu:runPreset10': () => runPreset(cardinals),


      // Run Secondary Presets
      'uuu:runPreset11': () => runPreset(superNES),
      'uuu:runPreset12': () => runPreset(princessPeach),
      'uuu:runPreset13': () => runPreset(tmntd),
      'uuu:runPreset14': () => runPreset(miamiVice),
      'uuu:runPreset15': () => runPreset(brownerd),
      'uuu:runPreset16': () => runPreset(crockford),
      'uuu:runPreset17': () => runPreset(airMax95),

      // 'uuu:runPreset18': () => runPreset(cardinals),
      // 'uuu:runPreset19': () => runPreset(cardinals),
      // 'uuu:runPreset20': () => runPreset(cardinals),

      'uuu:runPresetOriginal1': () => runPreset(original1),
      'uuu:runPresetOriginal2': () => runPreset(original2),


      // Save User's Presets
      'uuu:saveTheme1': () => saveTheme('uuurTheme1'),
      'uuu:saveTheme2': () => saveTheme('uuurTheme2'),
      'uuu:saveTheme3': () => saveTheme('uuurTheme3'),
      'uuu:saveTheme4': () => saveTheme('uuurTheme4'),
      'uuu:saveTheme5': () => saveTheme('uuurTheme5'),
      'uuu:saveTheme6': () => saveTheme('uuurTheme6'),
      'uuu:saveTheme7': () => saveTheme('uuurTheme7'),
      'uuu:saveTheme8': () => saveTheme('uuurTheme8'),
      'uuu:saveTheme9': () => saveTheme('uuurTheme9'),
      'uuu:saveTheme10': () => saveTheme('uuurTheme10'),

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
