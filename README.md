# Web display data
A small page to know the following data of your display:
- Display resolution: The full Width x Height of your display, like `1920 x 1080`.
- Browser viewport: The visible Width x Height of the page, like `1920 x 916`.
- Display rotation: The current rotation of your display, like `Horizontal`.
- Device pixel ratio: The ratio between physical pixels and logical pixels, like `1.0`.
- User agent string: It's contained in the HTTP headers and is intended to identify devices requesting online content, like `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36`.
- User agent type: Know if this user agent is Mobile or Desktop (Touch or not), like `Desktop (no touch)`.

## Notice
1. The *User agent type* may not be accurate in determining if it's Mobile or Desktop, but it shouldn't fail to determine if it's touch or not.
2. If it works in *Internet Explorer 11* or another unsupported browser, it's lucky.
3. Yes, I made a page to add the data from my various devices to the "Device toolbar" of my web browser ([Chrome DevTools](https://developer.chrome.com/docs/devtools/), [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/), etc.).

## Credits
- Favicon: [Icon made by Freepik from Flaticon](https://www.flaticon.com/free-icon/responsive_536255)
