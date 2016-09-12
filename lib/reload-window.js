'use babel'

import remote from 'remote';

export default function () {
  remote.getCurrentWindow().reload();
}
