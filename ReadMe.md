# JavaScript Development Environment

This is a generic JavaScript development environment that I build from scratch in ["Building a JavaScript Development Environment" on Pluralsight]. This isn't tied to any specific JS framework.

## Get Started

1. **Install [Node 6 or newer](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.**
3. `cd javascript-development-environment`
4. `npm install`
5. **Run the app.** - `npm start`

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| @babel/cli                   | Babel Command line interface                                                                              |
| @babel/core                  | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| @babel/node                 | Run Babel via Node                                                                                        |
| babel-preset-latest         | Babel preset for running all the latest standardized JavaScript features                                  |
| @babel/register              | Register Babel to transpile our Mocha tests                                                               |
| chai                        | Assertion library                                                                                         |
| chalk                       | Colored command line output                                                                               |
| css-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| express                     | Serves development and production builds                                                                  |
| html-webpack-plugin         | Generate HTML file programatically via Webpack                                                            |
| jsdom                       | In-memory DOM for testing                                                                                 |
| json-schema-faker           | Declare a JSON schema for generating fake data                                                            |
| json-server                 | Serve a JSON API locally                                                                                  |
| localtunnel                 | Create a tunnel to your local machine                                                                     |
| mocha                       | JavaScript testing library                                                                                |
| nock                        | Mock HTTP requests via Node                                                                               |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| numeral                     | Library for working with numbers                                                                          |
| open                        | Open app in default browser                                                                               |
| rimraf                      | Delete files                                                                                              |
| style-loader                | Add Style support to Webpack                                                                              |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                             |
