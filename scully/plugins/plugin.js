"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footerPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.footerPlugin = 'footerPlugin';
const footerPluginFunction = async (dom, route) => {
    console.log('Route Data : ', route.data);
    let document = dom.window.document;
    let footer = document.createElement('footer');
    footer.className = 'blog-footer';
    footer.innerHTML = `<span> ✍ ${route.data.author} </span> <span> 📅 ${new Date().toLocaleDateString()}</span>`;
    document.querySelector('body').appendChild(footer);
    return dom;
};
const validator = async () => [];
scully_1.registerPlugin('postProcessByDom', exports.footerPlugin, footerPluginFunction, validator);
//# sourceMappingURL=plugin.js.map