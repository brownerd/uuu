'use babel';

//import UuuView from './uuu-view';


import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

import exportstyles from './export-styles';
import importstyles from './import-styles';

const uipath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

export default {
  subscriptions: null,

  activate() {
    //const packagePath = getui.path;

    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'uuu:exportstyles': () => exportstyles(),
      'uuu:importstyles': () => importstyles()
    }));

    //atom.notifications.addSuccess('Success', {detail: 'hello', dismissable: true});
  },

  deactivate() {
    this.subscriptions.dispose();
  }
};

// @text-color: rgba(145, 145, 145, 1);
// @value-text-color: 0;
// @heading-color: rgba(33, 33, 33, 1);


// @text-color: rgba(145, 145, 145, 1);

// @text-color: rgba(145, 145, 145, 1);
// @value-text-color: 0;
// @heading-color: rgba(33, 33, 33, 1);
// @value-heading-color: 0;
// @background-color: rgba(94, 94, 94, 1);
// @value-background-color: 0;
// @button-color: rgba(0, 250, 93, 1);
// @value-button-color: 0;
// @value-border-color: -25;
// @value-nav: -30;
// @find-and-replace-border-highlight-color: rgba(255, 255, 255, 1);
// @find-and-replace-current-border-highlight-color: rgba(0, 255, 102, 1);
// @info-color: rgba(0, 170, 255, 1);
// @success-color: rgba(0, 255, 102, 1);
// @warning-color: rgba(255, 213, 0, 1);
// @error-color: rgba(255, 0, 0, 1);
// @settings-bg-style: pinstripe;


// atom.config.set('uuu-ui.text.color, 'rgba(145, 145, 145, 1)')
// atom.config.set('uuu-ui.text.value, '0')
// atom.config.set('uuu-ui.heading.color, 'rgba(33, 33, 33, 1)')
// atom.config.set('uuu-ui.heading.value, '0')
// atom.config.set('uuu-ui.background.color, 'rgba(94, 94, 94, 1)')
// atom.config.set('uuu-ui.background.value, '0')
// atom.config.set('uuu-ui.button.color, 'rgba(0, 250, 93, 1)')
// atom.config.set('uuu-ui.button.value, '0')
// atom.config.set('uuu-ui.border.value, '-25')
// atom.config.set('uuu-ui.nav.value, '-30')
// atom.config.set('uuu-ui.findAndReplace.borderHighLightColor, 'rgba(255, 255, 255, 1)')
// atom.config.set('uuu-ui.findAndReplace.borderHighLightColorCurrent, 'rgba(0, 255, 102, 1)')
// atom.config.set('uuu-ui.git.infoColor, 'rgba(0, 170, 255, 1)')
// atom.config.set('uuu-ui.git.successColor, 'rgba(0, 255, 102, 1)')
// atom.config.set('uuu-ui.git.warningColor, 'rgba(255, 213, 0, 1)')
// atom.config.set('uuu-ui.git.errorColor, 'rgba(255, 0, 0, 1)')
// atom.config.set('uuu-ui.settingsBackground.style, 'pinstripe')



// export default {
//
//   uuuView: null,
//   modalPanel: null,
//   subscriptions: null,
//
//   activate(state) {
//     this.uuuView = new UuuView(state.uuuViewState);
//     this.modalPanel = atom.workspace.addModalPanel({
//       item: this.uuuView.getElement(),
//       visible: false
//     });
//
//     // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
//     this.subscriptions = new CompositeDisposable();
//
//     // Register command that toggles this view
//     this.subscriptions.add(atom.commands.add('atom-workspace', {
//       'uuu:toggle': () => this.toggle()
//     }));
//   },
//
//   deactivate() {
//     this.modalPanel.destroy();
//     this.subscriptions.dispose();
//     this.uuuView.destroy();
//   },
//
//   serialize() {
//     return {
//       uuuViewState: this.uuuView.serialize()
//     };
//   },
//
//   toggle() {
//     console.log('Uuu was toggled!');
//     return (
//       this.modalPanel.isVisible() ?
//       this.modalPanel.hide() :
//       this.modalPanel.show()
//     );
//   }
//
// };
