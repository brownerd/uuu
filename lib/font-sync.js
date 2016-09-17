'use babel'

import promiseToWrite from './promise-to-write';

const UI_PATH = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu-font-sync.less`;

let formatFontSize = () =>
  `@font-size: ${atom.config.get('editor.fontSize')}px;`;
let formatLineHeight = () =>
  `@component-line-height: ${atom.config.get('editor.lineHeight')};`;

let data = [formatFontSize(), formatLineHeight()].join('\n');

const message = `Reload the window to sync UI and Syntax font size.
Press: ctrl-alt-cmd-r`;

export default function () {
  promiseToWrite(UI_PATH, data, 'utf8').then( () => {
    // after write has finished, notify user that their styles have been made
    atom.notifications.addSuccess('Success!', {detail: message, dismissable: true});
  }).catch(error => {atom.notifications.addWarning(error.reason)});
}
