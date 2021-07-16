## 📂 New Folder 🤟

<br>

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-new-folder/main/assets/icon.png" alt="New Folder - Visual Studio Code extension" >
</p>

<p align="center">
  <img src="https://vsmarketplacebadge.apphb.com/installs/igordvlpr.new-folder.svg?style=flat&color=2d97e3" alt="Installs">
  <img src="https://vsmarketplacebadge.apphb.com/rating/igordvlpr.new-folder.svg?style=flat&color=2d97e3" alt="Rating">
</p>

<br>

> 📂 Provides a "New Folder" view in the Explorer and a command in the Command Palette. 🤟

<br>

`Visual Studio Code` by default doesn't support a New Folder function when there are no open folders in the editor, not in the Explorer view nor in the Command Palette and the aim of this extension is to provide that exactly. With `New Folder` you can create new (local) folders without the need to leave Visual Studio Code.

<br>

> 🎉 NOTE: since `v.2.0.0` creating nested/recursive folders is supported! 🥳

> Made possible with **[FolderPicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker)**. 😄

<br>

To get started, open an instance of Visual Studio Code and do any of the following ways of creating a new folder:

<br>

> Explorer view

Expand the Explorer view in the Sidebar and click on the "Create Folder..." button, pick your desired parent folder and enter the name of the new folder.

<br>

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/npm-vscode-folderpicker/main/screenshots/explorer-command.gif" alt="Explorer View">
	<sub>Explorer View command</sub>
</p>

<br>

> Command Palette

Hit **F1** to bring up the Command Palette, type "New Folder", select the command and pick your desired parent folder and enter the name of the new folder.

<br>

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/npm-vscode-folderpicker/main/screenshots/command-palette-create.gif" alt="Command Palette New Folder">
	<sub>Command palette command to create a folder in current directory</sub>
</p>

<br>
<br>

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/npm-vscode-folderpicker/main/screenshots/command-palette-navigate.gif" alt="Command Palette New Folder">
	<sub>Command Palette navigate to folder and recursive directories create</sub>
</p>

<br>

> Keyboard shortcut

Press Ctrl/Cmd+Alt+N and pick your desired parent folder and enter the name of the new folder.

<br>

### ⚙ Config

Setting `files.simpleDialog.enable` to `true` is **NOT** necessary since `v.2.0.0`, that setting does not affect this extension.

<br>

To access the extension's config you can either go to Settings manually or open up the Command Palette and search for New Folder Config.

<br>

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-new-folder/main/screenshots/command-palette-config.png" alt="Command Palette Config">
</p>

<br>

The extension exposes these properties for you to change,

<br>

```ts
newFolder.autoOpen: boolean = true
```

Whether the newly created folder should be opened automatically upon creation.

<br>

```ts
newFolder.projectRoot: string = ''
```

Root directory path where you keep your projects. This is the path to use as the initial folder for the New Folder command. If the path is an empty string (default) or a non-existing path, the root folder will be set to your User/Home folder.

> ❗ On Windows you can use either forward or back slashes in the path, thanks to **[uPath](https://www.npmjs.com/package/@igor.dvlpr/upath)**.

<br>

```ts
newFolder.responseSpeed: ResponseSpeed = ResponseSpeed.Normal
```

Response speed for generating Actions when typing into the InputBox of the Picker. **Change only if needed.**
Functionality provided by [`Zep()`](https://www.npmjs.com/package/@igor.dvlpr/zep).

<br>

```ts
newFolder.showIcons: boolean = true
```

Whether to show icons in the Picker.

<br>

```ts
newFolder.iconsType: string = 'built-in'
```

The type of icons to use in the Picker.

<br>
