const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [
        assetExts,
        'ttf',
        'mp4',
        'otf',
        'xml',
        'atlas',
        'frag',
        'txt',
        'xml',
        'png',
        'jpg',
        'pb',
        'tflite',
        'jpeg',
      ],
      sourceExts: [
        ...sourceExts,
        'ttf',
        'mp4',
        'otf',
        'xml',
        'atlas',
        'frag',
        'txt',
        'xml',
        'png',
        'jpg',
        'pb',
        'tflite',
        'jpeg',
      ],
    },
  };
})();
