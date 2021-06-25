## 📂 New Folder 🤟

<br>

<p align="center">
<img src="https://github.com/igorskyflyer/vscode-new-folder/raw/main/assets/icon.png" alt="New Folder - Visual Studio Code extension" width="128" height="128">
</p>

> 📂 Provides a "New Folder" view in the Explorer and a command in the Command Palette. 🤟

<br>

`Visual Studio Code` doesn't natively support a New Folder command, not in the Explorer view nor in the Command Palette and the aim of this extension is to provide that exactly.

<br>

> 🚨 NOTE: currently, creating nested folders is not supported.

<br>

To get started, open an instance of Visual Studio Code and do any of the following ways of creating a new folder:

<br>

> Explorer view

Expand the Explorer view in the Sidebar and click on the "New Folder..." button, pick your desired parent folder and enter the name of the new folder.

<br>

> Command Palette

Hit **F1** to bring up the Command Palette, type "New Folder", select the command and pick your desired parent folder and enter the name of the new folder.

<br>

### ⚙ Config

I would recommend using the Simple File Dialogs when using this extension, since it makes the user experience more pleasant, i.e.

```js
"files.simpleDialog.enable": true
```

> // looking for ways to overcome this 😕

<br>

The extension exposes 2 properties for you to change,

<br>

` new-folder.autoOpen`

Whether the newly created folder should be opened automatically upon creation.

```js
 {
	"type": "boolean",
	"default": true
},
```

<br>

`new-folder.projectRoot`

Root directory path where you keep your projects. This is the path to use as the initial folder for the New Folder command. If the path is an empty string (default) or a non-existing path, the root folder will be set to your User/Home folder.

```js
{
	"type": "string",
	"default": ""
}
```
