const vscode = require('vscode')
const { u } = require('@igor.dvlpr/upath')
const { showFolderPicker } = require('@igor.dvlpr/vscode-folderpicker')
const { statSync, mkdirSync } = require('fs')

/**
 * Asynchronously get the project root folder from the Config.
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
 * Get the AutoOpen property from Config - configure whether the newly created folder should be automatically opened after it's created.
 * @returns {boolean}
 */
function getAutoOpen() {
  return vscode.workspace.getConfiguration('newFolder').get('autoOpen') || false
}

/**
 * Main entry point of the extension.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let cmdNew = vscode.commands.registerCommand('newFolder.new', () => {
    const projectRoot = getProjectRoot()

    showFolderPicker(projectRoot, {
      dialogTitle: 'Folder Picker',
      ignoreFocusOut: true,
      folderIcon: '⚡',
      upFolderIcon: '🔼',
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
      onNewFolder: (folderPath) => {
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

  let cmdConfig = vscode.commands.registerCommand('newFolder.config', () => {
    vscode.commands.executeCommand(
      'workbench.action.openSettings',
      '@ext:igordvlpr.new-folder'
    )
  })

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
