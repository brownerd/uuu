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
import brickCity from './presets/raji';
import schmaterial from './presets/jabari';
import darkEarth from './presets/darkness';
import strangerThings from './presets/strangerthings';
// import brownerd from './presets/brownerd';

// Light themes
import tmntd from './presets/tmnt-donetello';
import superNes from './presets/nintendo';
import miamiVice from './presets/miamivice';
import princessPeach from './presets/princess-peach';
import buckNaked from './presets/buckNaked';


// me only
import typographical from './presets/original-1';
import original2 from './presets/original-2';


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
      'uuu:runPreset3': () => runPreset(schmaterial),
      'uuu:runPreset4': () => runPreset(darkEarth),
      'uuu:runPreset5': () => runPreset(brickCity),

      'uuu:runPreset6': () => runPreset(superNes),
      'uuu:runPreset7': () => runPreset(tmntd),
      'uuu:runPreset8': () => runPreset(princessPeach),
      'uuu:runPreset9': () => runPreset(strangerThings),
      'uuu:runPreset10': () => runPreset(miamiVice),

      'uuu:runPresetOriginal1': () => runPreset(typographical),
      'uuu:runPresetOriginal2': () => runPreset(buckNaked),


      // Save User's Presets
      'uuu:saveTheme1': () => saveTheme('uuuTheme1'),
      'uuu:saveTheme2': () => saveTheme('uuuTheme2'),
      'uuu:saveTheme3': () => saveTheme('uuuTheme3'),
      'uuu:saveTheme4': () => saveTheme('uuuTheme4'),
      'uuu:saveTheme5': () => saveTheme('uuuTheme5'),
      // 'uuu:saveTheme6': () => saveTheme('uuuTheme6'),
      // 'uuu:saveTheme7': () => saveTheme('uuuTheme7'),
      // 'uuu:saveTheme8': () => saveTheme('uuuTheme8'),
      // 'uuu:saveTheme9': () => saveTheme('uuuTheme9'),
      // 'uuu:saveTheme10': () => saveTheme('uuuTheme10'),

      'uuu:useTheme1': () => useTheme('uuuTheme1'),
      'uuu:useTheme2': () => useTheme('uuuTheme2'),
      'uuu:useTheme3': () => useTheme('uuuTheme3'),
      'uuu:useTheme4': () => useTheme('uuuTheme4'),
      'uuu:useTheme5': () => useTheme('uuuTheme5')
      // 'uuu:useTheme6': () => useTheme('uuuTheme6'),
      // 'uuu:useTheme7': () => useTheme('uuuTheme7'),
      // 'uuu:useTheme8': () => useTheme('uuuTheme8'),
      // 'uuu:useTheme9': () => useTheme('uuuTheme9'),
      // 'uuu:useTheme10': () => useTheme('uuuTheme10')

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
