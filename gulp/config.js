var dest = "./build";
var src = './src';
var demoSrc = './demos';

module.exports = {
    sass: {
        src: [
            src + "/**/*.scss"
        ],
        outputName: 'moondash.css',
        dest: dest
    },
    othertask: {}
};