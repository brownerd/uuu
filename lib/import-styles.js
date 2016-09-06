'use babel';

import valueArray from './array-from-sassvars';

export default function () {

    return new Promise(
      function (resolve, reject) {
        let editor;

        if (editor = atom.workspace.getActiveTextEditor()) {
          let stylevars = editor.getSelectedText();

          // var valueArray = (sassvar) => sassvar.split(";\n")
          //   .filter(item => item)
          //   .map(item => item.split(":")
          //     .map(i => i)
          //   ).reduce((previous, current) => {
          //     return previous.concat(current[1].trim())
          //   }, []);

          var resultJSON = JSON.stringify(valueArray(stylevars));

          atom.notifications.addSuccess('Success', {detail: resultJSON, dismissable: true});
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

}
