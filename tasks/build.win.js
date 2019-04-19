'use strict';

const builder = require('electron-builder');
const Platform = builder.Platform;
const Arch = builder.Arch;
const buildInfo = require('./build_info');

builder.build({
  targets: Platform.WINDOWS.createTarget(null, Arch.x64),
  config: {
    'appId': buildInfo.appId,
    'win': {
      'target': 'nsis',
      'icon': buildInfo.icon.win,
      'files': buildInfo.files
    },
    'publish': [
        'github'
    ]
  }
});
