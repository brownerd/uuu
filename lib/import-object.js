'use babel';

import runPreset from './run-presets';


export default function () {
  let editor;

  if (editor = atom.workspace.getActiveTextEditor()) {
    let themeObject = editor.getSelectedText();

    runPreset(JSON.parse(themeObject));

    atom.notifications.addSuccess('Bap!', {detail: 'New theme has been uploaded!', dismissable: true});
  }
}
