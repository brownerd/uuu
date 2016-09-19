'use babel';

import transformAndSetStyles from './transform-and-set-styles';

export default function (syntax, ui) {

  transformAndSetStyles(syntax, 'syntax');
  transformAndSetStyles(ui, 'ui');

}
