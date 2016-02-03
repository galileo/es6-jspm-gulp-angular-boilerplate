// Import css
import 'bootstrap/css/bootstrap.min.css!';

// Import libraries
import 'jquery';
import 'bootstrap/js/bootstrap.min.js';

// Import application
import {bootApp} from './core/index.js';

import config from './config.json!json';

bootApp(config);
