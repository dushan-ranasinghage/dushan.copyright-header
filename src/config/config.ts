/**
 * @file config.ts
 * @description Copyright service configurations
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

import * as vscode from 'vscode';

class Configuration {
    private configuration;
    constructor(configName: string) {
        this.configuration = vscode.workspace.getConfiguration(configName);
    }

    /**
     * 
     * @param configProperty { author}
     * @returns 
     */
    get(configProperty: string) {
        if (typeof this.configuration.get(configProperty) === 'string') {
            return this.configuration.get(configProperty) || '';
        }

        if (typeof this.configuration.get(configProperty) === 'boolean') {
            return this.configuration.get(configProperty) || false;
        }
    }
}

const config = new Configuration('copyright');
export default config;