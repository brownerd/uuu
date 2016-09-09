'use babel';

import transformAndSetStyles from './transform-and-set-styles';

export default function () {
  let editor;

  if (editor = atom.workspace.getActiveTextEditor()) {
    let stylevars = editor.getSelectedText();
    transformAndSetStyles(stylevars, 'ui');

    atom.notifications.addSuccess('Success', {detail: 'New UI styles have been uploaded!', dismissable: true});
  }
}
