'use babel';

export default function () {
  let syntaxFontSize = () => atom.config.get('editor.fontSize');
  let uiFontSize = () => parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'), 10);

  let compare = () => {
    if (syntaxFontSize() === uiFontSize()) {
      return 'Syntax and UI font-sizes are the same'
    }
    else {
      return 'Syntax and UI font-sizes are NOT the same'
    }
  }

  let message = `Syntax font-size: ${syntaxFontSize()}px
    UI font-size: ${uiFontSize()}px`;

  atom.notifications.addSuccess(compare(), {detail: message, dismissable: true});
}
