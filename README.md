# YTShortsScroll
Scrolls past finished YouTube shorts.

## Requirements
- Windows, Linux, or macOS
- Node.js 20.12.0 or later (tested on v22.6.0)
- npm 10.8.2 or later (tested on v10.8.2)
- Chrome, Firefox, or Safari browser

## To build (creates `build` folder)
Make sure npm is installed.
- For Chrome: Run `npm run build:chrome`
- For Firefox: Run `npm run build:firefox`
- For Safari: Run `npm run build:safari`

## To package (creates `output-chrome`, `output-firefox`, or `output-safari` folder and corresponding zip files)
- For Chrome: Run `npm run package:chrome`, then install the `output-chrome` directory in chrome://extensions
- For Firefox: Run `npm run package:firefox`, then install the `output-firefox.zip` file in firefox://addons
- For Safari: Run `npm run package:safari`, then load the extension in Safari's Extension Builder