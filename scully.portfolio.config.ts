import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { CopyToClipboard, CopyToClipboardPluginConfig } from '@scullyio/scully-plugin-copy-to-clipboard';
import { AppConfig } from './app.config';

setPluginConfig('md', { enableSyntaxHighlighting: true });

setPluginConfig<CopyToClipboardPluginConfig>(CopyToClipboard, {
  copyBtnInitialText: '📄',
  copyBtnOnClickText: '✅',
  customBtnClass: 'customClass',
  clipboardJSPath:
    'https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js',
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      },
      postRenderers: [CopyToClipboard]
    },
    '/github-repos/:repo': {
      type: 'json',
      repo: {
        url: `https://api.github.com/users/${AppConfig.GITHUB_USER}/repos`,
        property: 'name',
        headers: {
          'User-Agent': 'ngdevelop-tech-app',
          'Authorization': `token ${AppConfig.GITHUB_TOKEN}`
        }
      }
    }
  }
};