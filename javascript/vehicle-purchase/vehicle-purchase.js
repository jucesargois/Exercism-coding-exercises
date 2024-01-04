// @ts-nocheck
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind === "car" || kind === "truck"
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let car1 = option1.split('')
  let car2 = option2.split('')

  let op1 = car1.find(i => isNaN(Number(i)))
  let op2 = car2.find(i => isNaN(Number(i)))
  if (op1[0].charCodeAt(0) < op2[0].charCodeAt(0)) {
    return `${option1} is clearly the better choice.`
  } else if (op2[0].charCodeAt(0) < op1[0].charCodeAt(0)) {
    return `${option2} is clearly the better choice.`
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
// @ts-ignore
export function calculateResellPrice(originalPrice, age) {
  
  throw new Error('Please implement the calculateResellPrice function');
}
