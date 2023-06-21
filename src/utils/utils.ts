/**
 * @file utils.ts
 * @description All the utility functions
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

import * as vscode from 'vscode';
import * as path from 'path';

import config from '../config/config';
import { languages } from '../constants/constants';
import Copyright from '../service/Copyright';

function copyrightCheck(editor: vscode.TextEditor | undefined, isManual: boolean = false) {
    if (!editor || !isSupportedLanguage(editor.document.languageId) || hasCopyright(editor.document)) { return; }

    const isNewFilesEnabled = config.get('isNewFiles');
    if (isManual || (isNewFilesEnabled && isNewFile(editor.document))) {
        insertCopyrightHeader(editor);
    }
}

function insertCopyrightHeader(editor: vscode.TextEditor) {
    const fileStartPosition = new vscode.Position(0, 0);
    const copyright = new Copyright(editor);
    const copyrightHeader = copyright.get();

    editor.edit(file => file.insert(fileStartPosition, copyrightHeader));
}

function hasCopyright(document: any) {
    if (isOldDocument(document)) {
        const firstLine = document.lineAt(0);
        return hasValidCopyright(firstLine);
    }
    return false;
}

function isOldDocument(document: any) {
    return !isNewFile(document);
}

function hasValidCopyright(line: any) {
    return !(line.isEmptyOrWhitespace || !line.text.includes('@copyright'));
}

function isSupportedLanguage(lang: string) {
    return languages.includes(lang);
}

function isNewFile(file: any) {
    return file.lineCount <= 1;
}

function getFileName(filePath: string) {
    return path.basename(filePath);
}

export {
    copyrightCheck,
    getFileName
};