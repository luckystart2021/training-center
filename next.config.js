const withImage = require('next-images');

const path = require('path')

module.exports = withImage({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});