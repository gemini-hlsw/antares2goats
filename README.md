# Google Chrome Local Installation

## Step 1: Open Chrome and Navigate to Extensions
1. Open Google Chrome.
2. Click on the three vertical dots located at the top-right corner of the browser to open the Chrome menu.
3. Hover over "Extensions" and then click "Manage Extensions".

## Step 2: Enable Developer Mode
1. In the Extensions page, you'll see a toggle switch for "Developer mode" at the top right corner. Turn this on.

## Step 3: Load Your Local Extension
1. After enabling Developer Mode, you'll see some new options appear at the top left of the page. Click on "Load unpacked."
2. A file dialog will appear. Navigate to the directory where your local extension is located. It is here.
3. Select the directory and click "Open."

## Step 4: Confirm Installation
1. You'll now see your local extension in the list of installed extensions. It should be enabled by default. If it's not, click the toggle switch to enable it. You can pin it to the top to always see it if you wish.

Your local browser extension is now installed and active. You can manage it like any other extension through the Extensions page.

# Packaging `antares2goats`

## Prerequisites

- Make sure you have `make` installed on your system.
- The Makefile expects all source files to be in a `src/` directory.

## Targets

The Makefile supports multiple targets:
- `all`: Builds both Chrome and Firefox extensions.
- `chrome`: Builds only the Chrome extension.
- `firefox`: Builds only the Firefox extension.
- `clean`: Cleans up the build directories.

## Versioning

The `VERSION` variable is required for all targets except `clean` and `help`. It should be in the `YY.MM.Major` format.

**Note**: Do not use leading zeros in the version number, as Firefox does not support it.

## Build and Package the Extension

To build and package both Chrome and Firefox extensions with a specific version, run:
```shell
$ make all VERSION=YY.MM.Major
```

### Build Chrome Extension

To build only the Chrome extension with a specific version, run:
```shell
$ make chrome VERSION=YY.MM.Major
```

### Build Firefox Extension

To build only the Firefox extension with a specific version, run:
```shell
$ make firefox VERSION=YY.MM.Major
```

### Clean Build Directories

To clean up all build directories, simply run:
```shell
$ make clean
```

## Available Commands

For a list of available commands, you can use:
```shell
$ make help
Available targets:
  make all VERSION=YY.MM.Major     - Build both Chrome and Firefox extensions (default)
  make chrome VERSION=YY.MM.Major  - Build Chrome extension
  make firefox VERSION=YY.MM.Major - Build Firefox extension
  make clean                       - Clean build directories

Do not use leading zeros in the version number!
```
