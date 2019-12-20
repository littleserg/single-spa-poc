import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './main.vue'

let appId;
const opts = {
    el: appId,
    render: r => r(Hello)
};

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: opts
});

export const bootstrap = [
    (props) => {
        appId = props.appId;
        opts.el = appId;
        return vueLifecycles.bootstrap(props)
    },
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];