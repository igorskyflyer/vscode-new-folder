const vscode = require('vscode')
const { u } = require('@igor.dvlpr/upath')
const {
  showFolderPicker,
  ResponseSpeed,
} = require('@igor.dvlpr/vscode-folderpicker')
const { statSync, mkdirSync } = require('fs')

/**
 * @typedef Icons
 * @property {IconObject} builtIn
 * @property {IconObject} emoji
 */

/**
 * @typedef IconObject
 * @property {string} iconFolder
 * @property {string}    iconFolderUp
 * @property {string} iconCreate
 * @property {string} iconNavigate
 * @property {string} iconPick
 */

/**
 * @enum {string}
 */
const IconsType = {
  BuiltIn: 'builtIn',
  Emoji: 'emoji',
}

/**
 * @type {Icons}
 */
const SupportedIcons = {
  /**
   * @type {IconObject}
   */
  builtIn: {
    iconFolder: '$(folder)',
    iconFolderUp: '$(folder-opened)',
    iconCreate: '$(new-folder)',
    iconNavigate: '$(chevron-right)',
    iconPick: '$(check)',
  },
  /**
   * @type {IconObject}
   */
  emoji: {
    iconFolder: '📁',
    iconFolderUp: '🔼',
    iconCreate: '➕',
    iconNavigate: '▶',
    iconPick: '🤏',
  },
}

/**
 * Gets the Icons for the Picker based on the configured Icon type.
 * @returns {IconObject}
 */
function getIcons() {
  let iconsType = vscode.workspace
    .getConfiguration('newFolder')
    .get('iconsType')

  if (iconsType && iconsType === IconsType.Emoji) {
    return SupportedIcons.emoji
  } else {
    return SupportedIcons.builtIn
  }
}

/**
 * Gets the project root folder from the Config.
 * @returns {string} The path of the project root folder or an empty string.
 */
function getProjectRoot() {
  const projectRoot = u(
    vscode.workspace.getConfiguration('newFolder').get('projectRoot') || ''
  )

  if (!projectRoot) {
    return ''
  }

  try {
    if (statSync(projectRoot).isDirectory()) {
      return projectRoot
    }
  } catch {
    return ''
  }

  return ''
}

/**
 * Gets the AutoOpen property from Config - configures whether the newly created folder should be automatically opened after it's created.
 * @returns {boolean}
 */
function getAutoOpen() {
  return vscode.workspace.getConfiguration('newFolder').get('autoOpen') || false
}

/**
 * Gets the ShowIcons property from Config - configures whether to show icons in the Picker.
 * @returns {boolean}
 */
function getShowIcons() {
  const showIcons = vscode.workspace
    .getConfiguration('newFolder')
    .get('showIcons')

  return showIcons == false ? false : true
}

/**
 * Gets the responseSpeed property from Config - configures the responsiveness of the InputBox of the QuickPick.
 * @returns {number}
 */
function getResponseSpeed() {
  const responseSpeed = vscode.workspace
    .getConfiguration('newFolder')
    .get('responseSpeed')

  if (responseSpeed === 'Lazy') {
    return ResponseSpeed.Lazy
  } else if (responseSpeed === 'Fast') {
    return ResponseSpeed.Fast
  } else {
    return ResponseSpeed.Normal
  }
}

/**
 * Opens the Configuration screen for this extension.
 * @returns {void}
 */
function openConfig() {
  vscode.commands.executeCommand(
    'workbench.action.openSettings',
    '@ext:igordvlpr.new-folder'
  )
}

/**
 * Main entry point of the extension.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let cmdNew = vscode.commands.registerCommand('newFolder.new', () => {
    const projectRoot = getProjectRoot()
    const Icons = getIcons()

    showFolderPicker(projectRoot, {
      dialogTitle: 'Folder Picker',
      ignoreFocusOut: true,
      showIcons: getShowIcons(),
      iconFolder: Icons.iconFolder,
      iconFolderUp: Icons.iconFolderUp,
      iconCreate: Icons.iconCreate,
      iconNavigate: Icons.iconNavigate,
      iconPick: Icons.iconPick,
      responseSpeed: getResponseSpeed(),
      onConfigButton: openConfig,
      onPickFolder: (folderPath) => {
        try {
          if (getAutoOpen()) {
            vscode.window.showInformationMessage(`Opening "${folderPath}"...`)

            vscode.commands.executeCommand(
              'vscode.openFolder',
              vscode.Uri.file(folderPath)
            )
          } else {
            vscode.window
              .showInformationMessage(
                'The setting Auto Open needs to be set to true in order to automatically open picked folders.',
                ...['Open Config', 'Dismiss']
              )
              .then((selection) => {
                if (selection && selection === 'Open Config') {
                  vscode.commands.executeCommand('newFolder.config')
                }
              })
          }
        } catch {
          vscode.window.showErrorMessage(`Couldn't open "${folderPath}".`)
        }
      },
      onCreateFolder: (folderPath) => {
        try {
          mkdirSync(folderPath, {
            recursive: true,
          })

          if (getAutoOpen()) {
            vscode.window.showInformationMessage(
              `Successfully created "${folderPath}", now opening...`
            )

            vscode.commands.executeCommand(
              'vscode.openFolder',
              vscode.Uri.file(folderPath)
            )
          } else {
            vscode.window
              .showInformationMessage(
                `Successfully created "${folderPath}".`,
                ...['Open Folder']
              )
              .then((selection) => {
                if (selection && selection === 'Open Folder') {
                  vscode.commands.executeCommand(
                    'vscode.openFolder',
                    vscode.Uri.file(folderPath)
                  )
                }
              })
          }
        } catch {
          vscode.window.showErrorMessage(
            `Couldn't create and open "${folderPath}".`
          )
        }
      },
    })
  })

  let cmdConfig = vscode.commands.registerCommand(
    'newFolder.config',
    openConfig
  )

  context.subscriptions.push(cmdNew)
  context.subscriptions.push(cmdConfig)
}

function deactivate() {
  // does nothing
}

module.exports = {
  activate,
  deactivate,
}
