/**
 * @file Copyright.ts
 * @description Copyright header class
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

import * as vscode from 'vscode';

import config from '../config/config';
import { getFileName } from '../utils/utils';

class Copyright {
    private fileName;
    private author;
    private copyrightLine;

    constructor(editor: vscode.TextEditor) {
        this.fileName = getFileName(editor.document.fileName);
        this.author = config.get('author');
        this.copyrightLine = config.get('copyrightLine');
    }

    get() {
        let header = `/**
 * @file ${this.fileName}
 * @description 
 * @author ${this.author}
 * @copyright ${this.copyrightLine}\n`;

        header += ` **/\n`;

        return header;
    }
}

export default Copyright;