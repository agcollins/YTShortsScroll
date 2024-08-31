# YTShortsScroll
Scrolls past finished YouTube shorts.

## Requirements
- Windows, Linux, or macOS
- Node.js 20.12.0 or later (tested on v22.6.0)
- npm 10.8.2 or later (tested on v10.8.2)
- Chrome or Firefox browser

## To build (creates `build` folder)
Make sure npm is installed.
For Chrome: Run `npm run build:chrome`
For Firefox: Run `npm run build:firefox`

## To package (creates `output-chrome` or `output-firefox` folder and `output-chrome.zip` or `output-firefox.zip`)
For Chrome: Run `npm run package:chrome`, then install the `output-chrome.zip` file in chrome://extensions
For Firefox: Run `npm run package:firefox`, then install the `output-firefox.zip` file in firefox://addons