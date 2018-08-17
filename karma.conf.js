module.exports = function(config) {
    config.set({

        reporters: ['progress', 'coverage'],

        browsers: ['Electron'],

        frameworks: ['mocha', "karma-typescript"],

        files: [
            'src/renderer/*.ts',
            'tests/unit/*.ts'
        ],

        preprocessors: {
            'src/renderer/*.ts': ["karma-typescript", 'coverage'],
            'tests/unit/*.ts': ["karma-typescript"]
        },

        client: {
            useIframe: false
        },

        karmaTypescriptConfig: {
            compilerOptions: {
                lib: [
                    "es2015",
                    "dom"
                ]
            }
        },

        logLevel: config.LOG_DEBUG
    });
}
