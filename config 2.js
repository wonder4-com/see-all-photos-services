module.exports = {
    steps: {
      import: {
        robot: '/s3/import',
        bucket: 'wonder4photos',
        key: 'AKIAJX42HQKP5QXE5LXA',
        secret: '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',
      },
      viruscheck: {
        use: 'filter',
        robot: '/file/virusscan',
        error_on_decline: true,
      },
    },
  };
  