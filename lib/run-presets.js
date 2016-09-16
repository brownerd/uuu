'use babel';

import transformAndSetStyles from './transform-and-set-styles';
// import runSyntaxPreset from './run-syntax-preset';
// import runUIPreset from './run-ui-preset';

export default function (syntax, ui) {
  transformAndSetStyles(syntax, 'syntax');
  //atom.notifications.addSuccess('Success', {detail: 'New Syntax styles have been uploaded!', dismissable: true});

  transformAndSetStyles(ui, 'ui');
  //atom.notifications.addSuccess('Success', {detail: 'New ui styles have been uploaded!', dismissable: true});
}
