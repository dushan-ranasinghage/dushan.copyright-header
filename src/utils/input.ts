/**
 * @file input.ts
 * @description Different types of input utilities
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

import * as vscode from 'vscode';

/**
 * This method gets text input from a prompt
 * @method getTextFromTextAreaWithCofig
 * @param property {string} Full property name in package.json
 * @param fieldName {string} Short field name to show in prompt message
 * @return {void}
 */
const getTextFromTextAreaWithCofig = async (property: string, fieldName: string): Promise<void> => {
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
};

/**
 * This method gets text input from a prompt
 * @method getTextFromTextArea
 * @param fieldName {string} Short field name to show in prompt message
 * @return {void}
 */
const getTextFromTextArea = async (fieldName: string): Promise<string> => {
    const textInputOptions: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Enter your ${fieldName}:`,
        placeHolder: 'Type here...',
        value: '', // Default value for the text area
        validateInput: validateInput // Optional validation function
    };

    const text = await vscode.window.showInputBox(textInputOptions);

    // Use the retrieved text in your extension
    if (text) {
        // Do something with the text
        console.log('Entered text:', text);
        return text;
    }

    return '';
};

const validateInput = (text: string): string | undefined =>  {
    // Optional validation logic
    if (text.trim().length === 0) {
        return 'Text cannot be empty.';
    }

    // Return undefined if validation succeeds
    return undefined;
};


export {
    getTextFromTextArea
};