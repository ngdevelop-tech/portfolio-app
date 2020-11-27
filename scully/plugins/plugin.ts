
import { registerPlugin, getPluginConfig } from '@scullyio/scully';
import { JSDOM } from 'jsdom';


export const scullyHeaderMessagePlugin = 'scullyHeaderMessage';

export interface ScullyHeaderMessagePluginConfig {
  message: string;
}


const scullyHeaderMessage = async (html: string): Promise<string> => {
  const pluginConfig = getPluginConfig<ScullyHeaderMessagePluginConfig>(scullyHeaderMessagePlugin);
  const dom = new JSDOM(html);
  const { window } = dom;
  const { document} = window;
  
  if(html){
    let p = document.createElement('p')
    p.setAttribute('style', 'background-color:orange; color: white; margin: 0px ');
    p.innerHTML = pluginConfig.message;
    document.querySelector('body').prepend(p);
    return dom.serialize();
  }
  
  return html;
};

const validator = async () => [];

registerPlugin('render', scullyHeaderMessagePlugin, scullyHeaderMessage, validator);
