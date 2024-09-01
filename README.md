# YTShortsScroll
Automatically advances to the next YouTube Shorts video when the current one ends.

## Requirements
- Windows, Linux, or macOS
- Node.js 20.12.0 or later (tested on v22.6.0)
- npm 10.8.2 or later (tested on v10.8.2)
- Chrome, Firefox, or Safari browser
- For Safari: Xcode Command Line Tools

## To build
Make sure npm is installed.
- Run `npm run build`

## To package 
- For Chrome: Set the `BROWSER` environment variable to `chrome` and run `npm run package`, then install the `output-chrome` directory in chrome://extensions
- For Firefox: Set the `BROWSER` environment variable to `firefox` and run `npm run package`, then install the `output-firefox.zip` file in firefox://addons
- For Safari: Set the `BROWSER` environment variable to `safari` and run `npm run package`. See below for macOS instructions.

## For macOS
- Run `xcrun safari-web-extension-converter output-safari --macos-only --no-prompt --force`
- Then, load the extension in Safari's Extension Builder

## To test
- Run `npm t`