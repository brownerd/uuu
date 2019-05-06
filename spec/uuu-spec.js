'use babel';

import uuu from '../lib/uuu';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('uuu', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('uuu');
  });

  describe('when the uuu:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.uuu')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'uuu:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.uuu')).toExist();

        let uuuElement = workspaceElement.querySelector('.uuu');
        expect(uuuElement).toExist();

        let uuuPanel = atom.workspace.panelForItem(uuuElement);
        expect(uuuPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'uuu:toggle');
        expect(uuuPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.uuu')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'uuu:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let uuuElement = workspaceElement.querySelector('.uuu');
        expect(uuuElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'uuu:toggle');
        expect(uuuElement).not.toBeVisible();
      });
    });
  });
});
