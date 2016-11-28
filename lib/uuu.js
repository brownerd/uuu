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
      'urawsm:syntaxImportStyles': () => importStyles('syntax'),
      'urawsm:syntaxExportStyles': () => exportStyles(syntaxPath),

      // UI Import and Export
      'urawsm:uiImportStyles': () => importStyles('ui'),
      'urawsm:uiExportStyles': () => exportStyles(uiPath),

      // Theme Object Import and Export
      'urawsm:importThemeObject': () => importThemeObject(),
      'urawsm:exportThemeObject': () => exportThemeObject(),

      // Font Check and Sync
      'urawsm:fontcheck': () => fontcheck(),
      'urawsm:fontsync': () => fontsync(),

      // Reload Window
      'urawsm:reloadWindow': () => reloadWindow(),

      // Run Core Presets
      'urawsm:runPreset1': () => runPreset(melowdrama),
      'urawsm:runPreset2': () => runPreset(amir),
      'urawsm:runPreset3': () => runPreset(raji),
      'urawsm:runPreset4': () => runPreset(jabari),
      'urawsm:runPreset5': () => runPreset(darkness),
      'urawsm:runPreset6': () => runPreset(cacao),
      'urawsm:runPreset7': () => runPreset(cardinals),

      // 'urawsm:runPreset8': () => runPreset(cardinals),
      // 'urawsm:runPreset9': () => runPreset(cardinals),
      // 'urawsm:runPreset10': () => runPreset(cardinals),


      // Run Secondary Presets
      'urawsm:runPreset11': () => runPreset(superNES),
      'urawsm:runPreset12': () => runPreset(princessPeach),
      'urawsm:runPreset13': () => runPreset(tmntd),
      'urawsm:runPreset14': () => runPreset(miamiVice),
      'urawsm:runPreset15': () => runPreset(brownerd),
      'urawsm:runPreset16': () => runPreset(crockford),
      'urawsm:runPreset17': () => runPreset(airMax95),

      // 'urawsm:runPreset18': () => runPreset(cardinals),
      // 'urawsm:runPreset19': () => runPreset(cardinals),
      // 'urawsm:runPreset20': () => runPreset(cardinals),

      'urawsm:runPresetOriginal1': () => runPreset(original1),
      'urawsm:runPresetOriginal2': () => runPreset(original2),


      // Save User's Presets
      'urawsm:saveTheme1': () => saveTheme('urawsmrTheme1'),
      'urawsm:saveTheme2': () => saveTheme('urawsmrTheme2'),
      'urawsm:saveTheme3': () => saveTheme('urawsmrTheme3'),
      'urawsm:saveTheme4': () => saveTheme('urawsmrTheme4'),
      'urawsm:saveTheme5': () => saveTheme('urawsmrTheme5'),
      'urawsm:saveTheme6': () => saveTheme('urawsmrTheme6'),
      'urawsm:saveTheme7': () => saveTheme('urawsmrTheme7'),
      'urawsm:saveTheme8': () => saveTheme('urawsmrTheme8'),
      'urawsm:saveTheme9': () => saveTheme('urawsmrTheme9'),
      'urawsm:saveTheme10': () => saveTheme('urawsmrTheme10'),

      'urawsm:useTheme1': () => useTheme('urawsmrTheme1'),
      'urawsm:useTheme2': () => useTheme('urawsmrTheme2'),
      'urawsm:useTheme3': () => useTheme('urawsmrTheme3'),
      'urawsm:useTheme4': () => useTheme('urawsmrTheme4'),
      'urawsm:useTheme5': () => useTheme('urawsmrTheme5'),
      'urawsm:useTheme6': () => useTheme('urawsmrTheme6'),
      'urawsm:useTheme7': () => useTheme('urawsmrTheme7'),
      'urawsm:useTheme8': () => useTheme('urawsmrTheme8'),
      'urawsm:useTheme9': () => useTheme('urawsmrTheme9'),
      'urawsm:useTheme10': () => useTheme('urawsmrTheme10')

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
