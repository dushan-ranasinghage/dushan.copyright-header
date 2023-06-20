/**
 * @file utils.ts
 * @description All the utility functions
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
        const header = `
        /**
        * @file utils.ts
        * @description 
        * @author ${this.author}
        * @copyright Copyright 2023 - Dushan Ranasinghage. All Rights Reserved.
        */`;

        return header;
    }
}

export default Copyright;