# New Folder

<br>

### 2.1.0

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

- added demo Gifs for easier usage understanding

<br>

### 2.0.0

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
  <br>

Known issues:

- no FolderPicker input value validation,

- you tell me.

<br>

### 1.0.9

- made the command "New Folder: Create..." always available in the Command Palette

<br>

### 1.0.8

- update uPath

<br>

### 1.0.7

- match default views positioning

<br>

### 1.0.6

- made the UI feel more like the default editor UI elements,
- show/hide commands conditionally,
- added a new command `Config`,
- updated configuration

- clean up resources

<br>

### 1.0.5

- clean up resources

<br>

### 1.0.4

- minor improvements

<br>

### 1.0.3

- added more installation and usage info,
- added screenshots,
- refactored code

<br>

### 1.0.2

- updated Marketplace banner colors,
- updated README,
- added extension keywords

<br>

### 1.0.0

> 🤟 Initial release 🎉
