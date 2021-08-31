const jwt = require('jsonwebtoken');

// module.exports = (id) => jwt.verify({id}, process.env.TOKEN_SECRET, {expiresIn : '12h'})

function verifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) return res.sendStatus(403);

    jwt.verify({id}, process.env.TOKEN_SECRET, (err, user) => {

        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

module.exports = verifyToken;