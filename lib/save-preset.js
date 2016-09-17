'use babel';

import exportStyles from './export-styles';
import importStyles from './import-styles';

import promiseToWrite from './promise-to-write';


export default function (spath, upath, presetNumber) {

  let dataSyntax = exportStyles(spath);
  let dataUI = exportStyles(upath);

  Promise.all([dataSyntax,dataUI]).then(values => {

    let formatData = (values) => [
      `'use babel';`,
      `export const presetUI${presetNumber} = \`${values[0]};\``,
      `export const presetSyntax${presetNumber} = \`${values[1]};\``
    ].join(',');

    promiseToWrite(`./presets/preset-${presetNumber}.js`, formatData, 'utf8').then( () => {
      atom.notifications.addSuccess('Preset saved!', {detail: 'Stay awesome!', dismissable: true});
    }).catch(error => {atom.notifications.addWarning(error)});

  });
}
