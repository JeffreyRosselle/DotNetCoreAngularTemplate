/// <binding BeforeBuild='bower, bower:install' />
module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib/",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};