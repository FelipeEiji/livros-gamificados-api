module.exports = {
    mongodbMemoryServer: {
        version: '5.0.8'
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
