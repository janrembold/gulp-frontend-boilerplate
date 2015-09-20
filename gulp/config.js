var src  = './src';
var dev  = "./.tmp";
var dist = './dist';

module.exports = {
    global: {
        src:  src,
        dev:  dev,
        dist: dist
    },

    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    },

    browserSync: {
        server: [dev, src]
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