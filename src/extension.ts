/**
 * @file extension.ts
 * @description Entry trigger of the extension
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import config from './config/config';
import { copyrightCheck } from './utils/utils';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copyright-header" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('copyright-header.add', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Copyright Header!');
	});

	vscode.window.onDidChangeActiveTextEditor((editor) => {
		copyrightCheck(editor);
    });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
