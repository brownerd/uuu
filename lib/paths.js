"use babel";

import path from "path";

const [atomPackagePath, ...rest] = atom.packages.getPackageDirPaths();
// returns
// ["/Users/workstation/.atom/packages"]

const uuuSyntaxThemePath = atomPackagePath + "uuu-syntax";
const uuuUIThemePath = atomPackagePath + "uuu-ui";

// paths to uuu.less stylesheets
const syntaxPath = path.join(uuuSyntaxThemePath, "styles", "uuu.less");
const uiPath = path.join(uuuUIThemePath, "styles", "uuu.less");

export { syntaxPath, uiPath };
