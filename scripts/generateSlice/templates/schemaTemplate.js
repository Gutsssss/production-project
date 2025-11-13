const firstCharIpperCase = require('../firstCharUpperCase');

module.exports = (componentName) => `export interface ${firstCharIpperCase(componentName)}Schema {

}`;
