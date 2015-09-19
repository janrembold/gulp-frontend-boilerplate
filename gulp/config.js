var src  = './src';
var dev  = "./.tmp";
var dist = './dist';

module.exports = {
    global: {
        src:  src,
        dev:  dev,
        dist: dist
    },

    browserSync: {
        server: dev
    },

    swig: {
        defaults: {
            cache: false
        },
        setup: function (s) {
            s.setDefaults({
                loader: s.loaders.fs(src + '/_swig/')
            });
        }
    }
};