const vscode = require('vscode')
const { stat, mkdir } = require('fs/promises')
const { u } = require('@igor.dvlpr/upath')

/**
 * Asynchronously get the project root folder from the Config.
 * @returns {Promise<vscode.Uri | null>} The Uri of the folder if folder is set and exists, else **null**.
 */
async function getProjectRoot() {
  const projectRoot = u(
    vscode.workspace.getConfiguration('new-folder').get('projectRoot')
  )

  if (!projectRoot) {
    return null
  }

  try {
    if ((await stat(projectRoot)).isDirectory()) {
      return vscode.Uri.file(projectRoot)
    }
  } catch (e) {
    console.log(e)
  }

  return null
}

/**
 * Get the AutoOpen property from Config - configure whether the newly created folder should be automatically opened after it's created.
 * @returns {string}
 */
function getAutoOpen() {
  return vscode.workspace.getConfiguration('new-folder').get('autoOpen')
}

/**
 * Main entry point of the extension.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'new-folder.new',
    async () => {
      const options = {
        canSelectMany: false,
        openLabel: 'Select',
        canSelectFiles: false,
        canSelectFolders: true,
        saveLabel: 'Create',
        title: 'Create Folder',
      }

      try {
        const projectRoot = await getProjectRoot()

        if (projectRoot != null) {
          options['defaultUri'] = projectRoot
        }

        const folder = await vscode.window.showSaveDialog(options)

        if (folder) {
          const newFolder = folder.fsPath

          try {
            await stat(newFolder)
            vscode.window.showInformationMessage(
              `Folder "${newFolder}" already exists.`
            )
            return
          } catch (e) {}

          try {
            await mkdir(newFolder)
            vscode.window.showInformationMessage(
              `Folder "${newFolder}" created successfully.`
            )

            if (getAutoOpen()) {
              vscode.commands.executeCommand('vscode.openFolder', folder)
            }
          } catch (e) {
            vscode.window.showErrorMessage(
              `Folder "${newFolder}" couldn't be created.`
            )
          }
        }
      } catch (e) {
        vscode.window.showErrorMessage(`An error has occurred.`)
      }
    }
  )

  context.subscriptions.push(disposable)
}

function deactivate() {
  // does nothing
}

module.exports = {
  activate,
  deactivate,
}
