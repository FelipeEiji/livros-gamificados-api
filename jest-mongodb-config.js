module.exports = {
    mongodbMemoryServer: {
        version: '7.0.0'
    },
    mongodbMemoryServerOptions: {
        instance: {
            dbName: 'jest'
        },
        binary: {
            version: '4.0.3',
            skipMD5: true
        },
        autoStart: false
    }
}
