/**
 * @file utils.ts
 * @description All the utility functions
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

import * as vscode from 'vscode';

import config from '../config/config';
import { languages } from '../constants/constants';

function copyrightCheck(editor: vscode.TextEditor | undefined) {
    if (editor !== undefined && isSupportedLanguage(editor.document.languageId)) {
        console.log('insert copyright');
    }
}

function isSupportedLanguage(lang: string) {
    return languages.has(lang);
}

export {
    copyrightCheck
};