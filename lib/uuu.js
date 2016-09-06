'use babel';

//import UuuView from './uuu-view';


import fs from 'fs';
import path from 'path';
import {CompositeDisposable} from 'atom';

import exportstyles from './export-styles';

// const uipath = `${atom.packages.getLoadedPackage('uuu-ui').path}/styles/uuu.less`;

export default {
  subscriptions: null,

  activate() {
    //const packagePath = getui.path;

    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'uuu:exportstyles': () => exportstyles()
    }));

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'uuu:importstyles': () => this.importstyles()
    }));
    //atom.notifications.addSuccess('Success', {detail: 'hello', dismissable: true});
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  // exportstyles() {
  //
  //   //atom.notifications.addSuccess('Success', {detail: uipath, dismissable: true});
  //
  //   exp();
  //
  //   // fs.readFile(
  //   //   uipath,
  //   //   'utf8',
  //   //   (err, data) => {
  //   //     if (err) {
  //   //       atom.notifications.addWarning(err.reason);
  //   //     }
  //   //     atom.notifications.addSuccess('Success', {detail: data.toString(), dismissable: true});
  //   //   }
  //   // );
  //
  //   return new Promise(
  //     function (resolve, reject) {
  //       fs.readFile(
  //         uipath,
  //         'utf8',
  //         (err, data) => {
  //           if (err) {
  //             atom.notifications.addWarning(err.reason);
  //           }
  //           atom.notifications.addSuccess('Success', {detail: data.toString(), dismissable: true});
  //         }
  //       );
  //     }
  //   )
  //
  // },

  importstyles() {
    return new Promise(
      function (resolve, reject) {
        let editor;

        if (editor = atom.workspace.getActiveTextEditor()) {
          let stylevars = editor.getSelectedText();

          var it = (x) => x.split(";\n")
            .filter(item => item)
            .map(item => item.split(":")
                .map(i => i)
            ).reduce((p,c) => {
              return p.concat(c[1].trim())
            }, []);

          atom.notifications.addSuccess('Success', {detail: it(stylevars), dismissable: true});
          atom.config.set('uuu-ui.text.color', 'rgba(145, 145, 145, 1)');
        }
      }
    )





    // function (arr) {
    //   atom.config.set('uuu-ui.text.color', arr[0]);
    //   atom.config.set('uuu-ui.text.value', arr[1]);
    //   atom.config.set('uuu-ui.heading.color', arr[2]);
    //   atom.config.set('uuu-ui.heading.value', arr[3]);
    //   atom.config.set('uuu-ui.background.color', arr[4]);
    //   atom.config.set('uuu-ui.background.value', arr[5]);
    //   atom.config.set('uuu-ui.button.color', arr[6]);
    //   atom.config.set('uuu-ui.button.value', arr[7]);
    //   atom.config.set('uuu-ui.border.value', arr[8]);
    //   atom.config.set('uuu-ui.nav.value', arr[9]);
    //   atom.config.set('uuu-ui.findAndReplace.borderHighLightColor', arr[10]);
    //   atom.config.set('uuu-ui.findAndReplace.borderHighLightColorCurrent', arr[11]);
    //   atom.config.set('uuu-ui.git.infoColor', arr[12]);
    //   atom.config.set('uuu-ui.git.successColor', arr[13]);
    //   atom.config.set('uuu-ui.git.warningColor', arr[14]);
    //   atom.config.set('uuu-ui.git.errorColor', arr[15];
    //   atom.config.set('uuu-ui.settingsBackground.style', arr[16]);
    // }
  },

  savestyles() {
    // read uuu-ui styles
    //  - capture state in object
    //    - {styles: ['rgba()', '0', 'rgba()'], name: 'Dark Theme'}

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
