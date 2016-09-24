'use babel';

import transformAndSetStyles from './transform-and-set-styles';

export default function (uiOrSyntax) {
  let editor;

  if (editor = atom.workspace.getActiveTextEditor()) {
    let stylevars = editor.getSelectedText();
    transformAndSetStyles(stylevars, uiOrSyntax);

    atom.notifications.addSuccess('Success', {detail: 'New styles have been uploaded!', dismissable: true});
  }
}
