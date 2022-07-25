module.exports = (api) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
          },
          root: ['./'],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
