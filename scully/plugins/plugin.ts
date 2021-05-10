
import { registerPlugin, getPluginConfig, HandledRoute } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const footerPlugin = 'footerPlugin';

const footerPluginFunction = async (dom: JSDOM, route: HandledRoute): Promise<JSDOM> => {
  console.log('Route Data : ', route.data);

  let document = dom.window.document;

  let footer = document.createElement('footer');
  footer.className = 'blog-footer'

  footer.innerHTML = `<span> ✍ ${route.data.author} </span> 
                      <span> 📅 ${new Date().toLocaleDateString()}</span>`

  document.querySelector('body').appendChild(footer);
  return dom;
};

const validator = async () => [];

registerPlugin('postProcessByDom', footerPlugin, footerPluginFunction, validator);
