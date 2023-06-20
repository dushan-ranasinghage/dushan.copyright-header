/**
 * @file Copyright.ts
 * @description Copyright header class
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
 */

import config from '../config/config';

class Copyright {
    private author;

    constructor() {
        this.author = config.get('author');
    }

    get() {
        let header = `/**
 * @file utils.ts
 * @description 
 * @author ${this.author}
 * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.\n`;

        header += ` **/\n`;

        return header;
    }
}

export default Copyright;