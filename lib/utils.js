'use strict';


/**
 * Convert Map to an Object so it can be converted to JSON.
 *
 * @param {Map} map - Map object to convert.
 * @return {Object} Converted object.
 */
module.exports.convertMapToObject = map => {
  const obj = {};
  for (const [key, val] of map.entries())
    obj[key] = val;
  return obj;
};
