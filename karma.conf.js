module.exports = function(config) {
    config.set({
        browsers: ['Electron'],

        frameworks: ['mocha'],

        files: [
            'tests/unit/*.js'
        ],

        preprocessors: {
            'tests/unit/*.js': ['webpack']
        },

        client: {
            useIframe: false
        },

        logLevel: config.LOG_INFO
    });
}