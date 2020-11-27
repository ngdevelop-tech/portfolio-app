"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scullyHeaderMessagePlugin = void 0;
const scully_1 = require("@scullyio/scully");
const jsdom_1 = require("jsdom");
exports.scullyHeaderMessagePlugin = 'scullyHeaderMessage';
const scullyHeaderMessage = async (html) => {
    const pluginConfig = scully_1.getPluginConfig(exports.scullyHeaderMessagePlugin);
    const dom = new jsdom_1.JSDOM(html);
    const { window } = dom;
    const { document } = window;
    if (html) {
        let p = document.createElement('p');
        p.setAttribute('style', 'background-color:orange; color: white; margin: 0px ');
        p.innerHTML = pluginConfig.message;
        document.querySelector('body').prepend(p);
        return dom.serialize();
    }
    return html;
};
const validator = async () => [];
scully_1.registerPlugin('render', exports.scullyHeaderMessagePlugin, scullyHeaderMessage, validator);
//# sourceMappingURL=plugin.js.map