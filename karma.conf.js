module.exports = function(config) {
    config.set({
        browsers: ['Electron'],

        frameworks: ['mocha', "karma-typescript"],

        files: [
            'tests/unit/*.ts'
        ],

        preprocessors: {
            'tests/unit/*.ts': ['webpack', "karma-typescript"]
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