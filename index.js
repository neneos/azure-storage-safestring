
const diacritics = require('./diacritics');

module.exports = {
    cleanBlobName: function (st) {
        if (st.length < 1)
            throw Error('String must be longer than 1 character');

        var cleanString = encodeURIComponent(diacritics.clean(st)
            .split(' ').join('-')
            .split('\\').join('/'))
            .split('%2F').join('/');


        if (st.length > 1024)
            throw Error('String must be shorter than 1025 character');

        if ((cleanString.split("/").length) > 254)
            throw new Error('To many virtual directories');

        return cleanString;
    }
};