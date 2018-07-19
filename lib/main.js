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
// import brickCity from './presets/raji';
import schmaterial from './presets/jabari';
import darkEarth from './presets/darkness';
import brownerd from './presets/brownerd';

// Light themes
import tmntd from './presets/tmnt-donetello';
import superNes from './presets/nintendo';
import miamiVice from './presets/miamivice';
//import strangerThings from './presets/strangerthings';
import fiftyShadesOfGray from './presets/crockford';
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
      'urawsm:runPreset3': () => runPreset(schmaterial),
      'urawsm:runPreset4': () => runPreset(darkEarth),
      'urawsm:runPreset5': () => runPreset(brownerd),
      'urawsm:runPreset6': () => runPreset(superNes),
      'urawsm:runPreset7': () => runPreset(tmntd),
      'urawsm:runPreset8': () => runPreset(miamiVice),
      'urawsm:runPreset9': () => runPreset(typographical),
      'urawsm:runPreset10': () => runPreset(buckNaked),

      'urawsm:runPresetOriginal1': () => runPreset(typographical),
      'urawsm:runPresetOriginal2': () => runPreset(original2),


      // Save User's Presets
      'urawsm:saveTheme1': () => saveTheme('urawsmTheme1'),
      'urawsm:saveTheme2': () => saveTheme('urawsmTheme2'),
      'urawsm:saveTheme3': () => saveTheme('urawsmTheme3'),
      'urawsm:saveTheme4': () => saveTheme('urawsmTheme4'),
      'urawsm:saveTheme5': () => saveTheme('urawsmTheme5'),
      // 'urawsm:saveTheme6': () => saveTheme('urawsmTheme6'),
      // 'urawsm:saveTheme7': () => saveTheme('urawsmTheme7'),
      // 'urawsm:saveTheme8': () => saveTheme('urawsmTheme8'),
      // 'urawsm:saveTheme9': () => saveTheme('urawsmTheme9'),
      // 'urawsm:saveTheme10': () => saveTheme('urawsmTheme10'),

      'urawsm:useTheme1': () => useTheme('urawsmTheme1'),
      'urawsm:useTheme2': () => useTheme('urawsmTheme2'),
      'urawsm:useTheme3': () => useTheme('urawsmTheme3'),
      'urawsm:useTheme4': () => useTheme('urawsmTheme4'),
      'urawsm:useTheme5': () => useTheme('urawsmTheme5')
      // 'urawsm:useTheme6': () => useTheme('urawsmTheme6'),
      // 'urawsm:useTheme7': () => useTheme('urawsmTheme7'),
      // 'urawsm:useTheme8': () => useTheme('urawsmTheme8'),
      // 'urawsm:useTheme9': () => useTheme('urawsmTheme9'),
      // 'urawsm:useTheme10': () => useTheme('urawsmTheme10')

    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};
