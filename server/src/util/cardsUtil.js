import { COLORS, NUMBERS_OF_CARDS_IN_SET, SHADINGS,  SYMBOLS } from "../consts";
import * as _ from 'lodash'

/**
 * Generate all combination of arguments when given arrays or strings
//* e.g. [['Ben','Jade','Darren'],['Smith','Miller']] to [['Ben','Smith'],[..]]
 * e.g. 'the','cat' to [['t', 'c'],['t', 'a'], ...]
**/
function _cartesianProductOf(args) {
    if (arguments.length>1) args=_.toArray(arguments);

    // strings to arrays of letters
    args=_.map(args, opt=>typeof opt==='string'?_.toArray(opt):opt)

    return _.reduce(args, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return _.concat(x,[y]);
            });
        }), true);
    }, [ [] ]);
}

export const initCardsDeck = () => {
    console.log("initCardsDeck()");
    const combsVals = _cartesianProductOf([COLORS, NUMBERS_OF_CARDS_IN_SET, SHADINGS, SYMBOLS]);
    const keys = ["color", "number", "shading", "symbol"];

    const cardsDeck = _.map(combsVals, (comb, index) => {
        return {..._.zipObject(keys, comb),
                id: index};
    });

    return (_.shuffle(cardsDeck));
}