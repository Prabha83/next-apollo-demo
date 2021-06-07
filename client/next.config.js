const path = require("path");

module.exports = {
    poweredByHeader: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    env: {
        GRAPHQL_URL: "http://localhost:5000/graphql",
    },
};
