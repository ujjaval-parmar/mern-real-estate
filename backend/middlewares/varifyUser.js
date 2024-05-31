import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


dotenv.config();

export const verifyUser = (req, res, next) => {


    // console.log(req.cookies.token);

    if (!req.cookies.token) {
        return res.status(403).json({
            status: 'Failed',
            message: 'Auth Error: No Token'
        })
    };

    jwt.verify(req.cookies.token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
            return res.status(403).json({
                status: 'Failed',
                message: 'Auth Error: Token is not valid!',
                error: err.message
            })
        }

        req.userId = data.id;
        // console.log(data);

        next();
    })

    
}


export const shouldBeAdmin = (req, res, next) => {

    // console.log(process.env.JWT_SECRET);

    // console.log(req.headers);
    // console.log(req.headers.authorization.split(' '));

    // console.log(req.cookies.token);

    if (!req.cookies.token) {
        return res.status(403).json({
            status: 'Failed',
            message: 'Auth Error: No Token'
        })
    };


    jwt.verify(req.cookies.token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
            return res.status(403).json({
                status: 'Failed',
                message: 'Auth Error: Token is not valid!',
                error: err.message
            })
        }

        if (!data.isAdmin) {
            return res.status(403).json({
                status: 'Failed',
                message: 'Auth Error: Not authorize!',
                error: err.message
            })
        }


        // console.log(data);
        req.userId = data.id;

        next();

    })

}




