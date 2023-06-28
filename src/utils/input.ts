/**
 * @file input.ts
 * @description Different types of input utilities
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

import * as vscode from 'vscode';

async function getTextFromTextArea(property: string, fieldName: string) {
    const inputOptions: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Enter your ${fieldName}:`,
        placeHolder: 'Type here...',
        value: vscode.workspace.getConfiguration().get(property)
    };

    const text = await vscode.window.showInputBox(inputOptions);

    // Use the retrieved text in your extension
    if (text) {
        // Do something with the text
        console.log('Entered text:', text);
        vscode.workspace.getConfiguration().update(property, text);
    }
}

export {
    getTextFromTextArea
};