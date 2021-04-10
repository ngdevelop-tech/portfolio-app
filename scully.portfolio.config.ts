import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { copyToClipboard, CopyToClipboardPluginConfig } from '@scullyio/scully-plugin-copy-to-clipboard';

setPluginConfig('md', { enableSyntaxHighlighting : true});

setPluginConfig<CopyToClipboardPluginConfig>(copyToClipboard, {
  copyBtnInitialText : 'Copy 📄',
  copyBtnOnClickText : 'Copied! ✅',
  customBtnClass: 'copyToClipboardBtn',
  clipboardJSPath : 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js',
})

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [ copyToClipboard ],
      slug: {
        folder: "./blog"
      }
    },
  }
};