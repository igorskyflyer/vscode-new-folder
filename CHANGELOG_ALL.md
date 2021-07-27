# 📂 New Folder 🤟

<br>

You can read about known issues [here](https://github.com/igorskyflyer/vscode-new-folder/blob/main/KNOWN_ISSUES.md) or if you found a new issue or you have a feature request, you can post those [here](https://github.com/igorskyflyer/vscode-new-folder/issues).

<br>

### 2.2.3 - 26 July 2021

- updated [FolderPicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker) to `v.2.1.4` which brings these fixes:
  - an issue with Picker being busy indefinitely,
  - caches clear Action,
  - other performance improvements.

<br>

### 2.2.2 - 26 July 2021

- updated [FolderPicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker) to `v.2.1.3` which brings these fixes:

  - updated dependencies,
  - don't update path unless accepted,
  - fixed an error with `projectRoot` when it's empty/not provided,
  - use [`Zep()`](https://www.npmjs.com/package/@igor.dvlpr/zep) for `onDidChangeActive` for stability,
  - updated to use Visual Studio Code `v.1.58.1`.

<br>

### 2.2.1 - 22 July 2021

- updated [FolderPicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker) to `v.2.1.1`,
- updated documentation and demo Gifs,
- separated changelogs for current and previous versions,
- moved the known issues from this changelog to a separate file.

<br>

### 2.2.0

- updated [FolderPicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker) to `v.2.1.0` which brings these fixes/improvements:
  - relative folder path validation,
  - added a Clear Action that appears when the relative folder path is not valid,
  - re-implemented the UI indicator when the Picker is generating Actions that was broken during the previous update,
- changed the default icon for `Pick current folder` Action (emoji type icons),
- added a new option, `ignoreFocusOut` that controls whether the Picker should stay open even when loosing focus,
- updated Visual Studio dependency to `v.1.58.0`,
- internal improvements.

<br>

### 2.1.5

- updated internal functionality.

<br>

### 2.1.4

- added `Instant` as an option to `ResponseSpeed` config property,
- updated [FolderPicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker) to `v.2.0.2` which includes these fixes:
  - updated [`Zep()`](https://www.npmjs.com/package/@igor.dvlpr/zep) to `v.3.0.0` - brings more stability,
  - added `Instant` as a value to `ResponseSpeed`.

<br>

### 2.1.3

- improved activation time, by up to ~20x!
- improved overall performance,
- added extension name to the `Config` link in the Explorer for clarity.

<br>

### 2.1.x

- added 3 new options:
  - `responseSpeed` - response speed for generating Actions when typing into the InputBox of the Picker,
  - `showIcons` - whether to show icons in the Picker (fixes this [issue](https://github.com/igorskyflyer/vscode-new-folder/issues/5) by [@mhanuszh](https://github.com/mhanuszh)),
  - `iconsType` - the type of icons to use in the Picker.
- the generated Actions are now at the top of the Picker,
- fixed an issue with the `showIcons` property,
- fixed a conflict that occurs when clicking the Config button of the Picker when `ignoreFocusOut` is set to **true**,
- generating Actions is now throttled by default - see Response Speed in the Config,
- added a UI indicator when the Picker is generating Actions,
- started using [`Zep()`](https://www.npmjs.com/package/@igor.dvlpr/zep),
- added support for [ThemeIcon](https://code.visualstudio.com/api/references/vscode-api#ThemeIcon),
- absolute paths are now resolved.

<br>

### 2.0.1

- added demo Gifs for easier usage understanding.

<br>

## 2.0.0

- added more interactive dialogs upon folder picking/creating,
- added a link to Config in the Explorer view,
- completely rewritten the extension, it now uses a custom UI provided by `FolderPicker` and available on **[Github](https://github.com/igorskyflyer/npm-vscode-folderpicker)** and **[npm](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker)** which brings new features:

  - nested/recursive folder creating (fixed [#1](https://github.com/igorskyflyer/vscode-new-folder/issues/1) 🤗),
  - custom icons for the Picker,
  - custom actions,
  - smart folder navigation,
  - absolute path support,
  - many callbacks,
  - universal paths, thanks to [uPath](https://github.com/igorskyflyer/npm-upath),
  - fast folder traversal,
  - error handling.

  <br>

### 1.0.9

- made the command "New Folder: Create..." always available in the Command Palette.

<br>

### 1.0.8

- updated [uPath](https://www.npmjs.com/package/@igor.dvlpr/upath).

<br>

### 1.0.7

- matched default views positioning.

<br>

### 1.0.6

- made the UI feel more like the default editor UI elements,
- show/hide commands conditionally,
- added a new command `Config`,
- updated configuration,
- cleaned up resources.

<br>

### 1.0.5

- cleaned up resources.

<br>

### 1.0.4

- minor improvements.

<br>

### 1.0.3

- added more installation and usage info,
- added screenshots,
- refactored code.

<br>

### 1.0.2

- updated Marketplace banner colors,
- updated README,
- added extension keywords.

<br>

## 1.0.0

### 🤟 Initial release 🎉
