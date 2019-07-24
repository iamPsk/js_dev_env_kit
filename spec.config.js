/* This file does the following:
1. Registers babel for transpiling code before testing.
2. Disables Webpack css-specific features that Mocha doesn't understand. */

require("@babel/register")();
require.extensions[".css"] = () => { };