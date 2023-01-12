module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@assets": "./assets",
          "@constants": "./src/constants",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@config": "./src/config",
          "@utils": "./src/utils",
          "@theme": "./src/theme",
          "@services": "./src/services",
          "@navigation": "./src/navigation",
          "@hooks": "./src/hooks",
          "@redux": "./src/redux"
        }
      }
    ]
  ]
};

