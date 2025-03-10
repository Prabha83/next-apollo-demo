const path = require("path");

module.exports = {
    poweredByHeader: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    env: {
        GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    },
};
