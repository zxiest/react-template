sourceFiles = "./"
publicAssets = "./dist"
bowerDir = './vendor/bower_components'

module.exports = {
  sass: {
    src: sourceFiles + "/stylesheets/**/*.{sass,scss}",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/images/', // Used by the image-url helper
      includePaths: [ bowerDir + '/bootstrap-sass/assets/stylesheets', bowerDir + '/font-awesome/scss'],
      sourceComments: true,
      errLogToConsole: true
    }
  },
};
