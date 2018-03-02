
const diacritics = require('./diacritics');
module.exports = {
    clean: function (st) {
        return diacritics.clean(st).toLowerCase();
    }
};