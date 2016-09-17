'use babel';

import path from 'path';
import exportStyles from './export-styles';
import importStyles from './import-styles';
import promiseToWrite from './promise-to-write';


export default function (spath, upath, presetNumber) {

  let dataSyntax = exportStyles(spath);
  let dataUI = exportStyles(upath);

  let formatData = (values) => [
    `'use babel';`,
    `export const uuurThemeUI${presetNumber} = \`${values[1]}\`;`,
    `export const uuurThemeSyntax${presetNumber} = \`${values[0]}\`;`
  ].join('\n\n');

  Promise.all([dataSyntax, dataUI]).then(values => {

    promiseToWrite(path.join(__dirname, 'presets', `uuur-theme-${presetNumber}.js`), formatData(values), 'utf8').then( () => {
      atom.notifications.addSuccess('Preset saved!', {detail: 'Stay awesome!', dismissable: true});
    }).catch(error => {atom.notifications.addWarning(error)});

  });
}
