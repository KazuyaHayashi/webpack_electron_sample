'use strict';

const builder = require('electron-builder');
const Platform = builder.Platform;
const buildInfo = require('./build_info');

builder.build({
  targets: Platform.LINUX.createTarget(),
  config: {
    'appId': buildInfo.appId,
    'win': {
      'target': 'zip',
      'files': buildInfo.files
    },
    'publish': [
        'github'
    ]
  }
});
