'use babel';

import path from 'path';

const getPackagePath = (packageName) => atom.packages.getLoadedPackage(packageName).path;

const urawsmSyntaxThemePath = getPackagePath('urawsm-syntax');
const urawsmUIThemePath = getPackagePath('urawsm-ui');

// paths to urawsm.less stylesheets
const syntaxPath = path.join(urawsmSyntaxThemePath, 'styles', 'urawsm.less');
const uiPath = path.join(urawsmUIThemePath, 'styles', 'urawsm.less');

export {syntaxPath, uiPath};
