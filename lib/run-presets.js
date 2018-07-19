'use babel';

import transformAndSetStyles from './transform-and-set-styles';

export default function(obj, ) {

  if (obj.hasOwnProperty('theme')) {
    transformAndSetStyles(obj.theme.syntax, 'syntax');
    transformAndSetStyles(obj.theme.ui, 'ui');
  }
  else {
    atom.notifications.addWarning('This slot is empty buddy!', {
      detail: "Please save a theme to this slot before using. Thx!",
      dismissable: true
    });
  }
}
