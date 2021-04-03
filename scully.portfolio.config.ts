import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
    '/github-repos/:repo': {
      type: 'json',
      repo: {
        url: `https://api.github.com/users/ngdevelop-tech/repos`,
        property: 'name',
        headers: {
          'User-Agent': 'ngdevelop-tech-app',
          'Authorization': `token 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`
        }      
      }
    }
  }
};