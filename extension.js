// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const { extensionPath, subscriptions, globalState } = context;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vs-test4" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('testhelloWorld', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vs-test4!');
		const panel = vscode.window.createWebviewPanel(
        'testWebview', // viewType
        "WebView演示", // 视图标题
        vscode.ViewColumn.One, // 显示在编辑器的哪个部位
        {
            enableScripts: true, // 启用JS，默认禁用
            retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
        }
    );
		panel.webview.html = getWebViewContent(context,'web/dist/index.html');

		function getPath(context,relativePath) {
			const diskPath = vscode.Uri.file(path.join(context.extensionPath, relativePath));
			return diskPath.with({ scheme: 'vscode-resource' }).toString();
		}
		
		function getWebViewContent(context) {
			let src = getPath(context,'web/dist/css/app.css');
			let app = getPath(context,'web/dist/js/app.js');
			let vendors = getPath(context,'web/dist/js/chunk-vendors.js');
			return  `<!DOCTYPE html>
				<html>
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
					<meta name="theme-color" content="#000000">
					<title>Iceworks</title>
					<link rel="stylesheet" type="text/css" href="${src}" />
				</head>
				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<div id="app">sdfsdfsdfsdf</div>
					<script src="${vendors}"></script>
					<script src="${app}"></script>
				</body>
			</html>`
		}
	});
	subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
