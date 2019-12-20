import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

window.SystemJS = window.System;

singleSpa.registerApplication('rect', () => SystemJS.import('@avl/micro-react'), isActive.react);
singleSpa.registerApplication('vue', () => SystemJS.import('@avl/micro-vue'), isActive.vue);

singleSpa.start();
