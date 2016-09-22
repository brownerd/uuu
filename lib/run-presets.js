'use babel';

import transformAndSetStyles from './transform-and-set-styles';

export default function (obj) {

  transformAndSetStyles(obj.theme.syntax, 'syntax');
  transformAndSetStyles(obj.theme.ui, 'ui');

}
