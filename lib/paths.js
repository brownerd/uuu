'use babel';

import path from 'path';

const getPackagePath = (packageName) => atom.packages.getLoadedPackage(packageName).path;

const uuuSyntaxThemePath = getPackagePath('uuu-syntax');
const uuuUIThemePath = getPackagePath('uuu-ui');

// paths to uuu.less stylesheets
const syntaxPath = path.join(uuuSyntaxThemePath, 'styles', 'uuu.less');
const uiPath = path.join(uuuUIThemePath, 'styles', 'uuu.less');

export {syntaxPath, uiPath};
