/**
 * @file utils.ts
 * @description All the utility functions
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

import * as vscode from 'vscode';

import config from '../config/config';
import { languages } from '../constants/constants';
import Copyright from '../service/Copyright';

function copyrightCheck(editor: vscode.TextEditor | undefined) {
    if (editor !== undefined && isSupportedLanguage(editor.document.languageId)) {
        insertCopyrightHeader(editor);
    }
}

function insertCopyrightHeader(editor: vscode.TextEditor) {
    const docStartPosition = new vscode.Position(0, 0);
    const copyright = new Copyright();
    const copyrightHeader = copyright.get();

    editor.edit(document => document.insert(docStartPosition, copyrightHeader));
}

function isSupportedLanguage(lang: string) {
    return languages.has(lang);
}

export {
    copyrightCheck
};