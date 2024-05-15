
const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "kompass" is now active!');
	context.subscriptions.push(
		vscode.commands.registerCommand('kompass.helloWorld',  () => {
			vscode.window.showInformationMessage('Kompass Runing');
			const panel = vscode.window.createWebviewPanel(
				'catCoding', // Identifies the type of the webview. Used internally
				'Cat Coding', // Title of the panel displayed to the user
				vscode.ViewColumn.One, // Editor column to show the new webview panel in.
				{
					enableScripts: true,
				}
			  );
			  const style = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, '', 'style.css'));
			  const vscodestyle = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, '', 'vscode.css'));
			  const script = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, '', 'main.js'));
			  const d3 = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, '', 'd3.js'));
			  const d3min = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, '', 'd3-selection-multi.js'));
			  const data = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, '', 'treedata.json'));
			  panel.webview.html = getWebviewContent(style, vscodestyle, script, d3, data, d3min);
			  
		})
	)
}


function getWebviewContent(style, vscodestyle, script, d3, data, d3min){
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <link href="${vscodestyle}" rel="stylesheet">
	  <link href="${style}" rel="stylesheet">
	  <title>Kompass</title>
  </head>
  <body>
  	<h1 id="h1">Kompass Json Viewer</h1>
	<script src="F:/Projects/Kompass/kompass/d3.js"></script>
	<script src="F:/Projects/Kompass/kompass/d3-selection-multi.js"></script>
	<script src="F:/Projects/Kompass/kompass/treedata.json"></script> 
	<script src="F:/Projects/Kompass/kompass/main.js"></script>
  </body>
  </html>`;
  }

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
