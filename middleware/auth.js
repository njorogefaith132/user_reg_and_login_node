const jwt = require('jsonwebtoken');

// module.exports = (id) => jwt.verify({id}, process.env.TOKEN_SECRET, {expiresIn : '12h'})

module.exports =verifyToken = (req, res, next)=> {
    const token = req.header("x-access-token");

    if (!token) return res.status(401).send({message: "Access denied. no token provided"});

    try {
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = data;
        next();
    } catch (error) {
        res.status(400).send({message: "Invalid token"})
    }
}