import { ScullyConfig } from '@scullyio/scully';
import { AppConfig } from './app.config';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
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