import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


dotenv.config();

export const verifyUser = (req, res, next) => {

    // console.log(process.env.JWT_SECRET);

    // console.log(req.headers);
    // console.log(req.headers.authorization.split(' '));

    if (!req.headers.authorization) {
        return res.status(403).json({
            status: 'Failed',
            message: 'Auth Error: No Token'
        })
    }

    jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, async (err, data) => {
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
            })
        }


        // console.log(data);

        req.userId = data.id;

        next();
    })

}

// export const shouldBeAdmin = (req, res, next) => {

//     // console.log(process.env.JWT_SECRET);

//     // console.log(req.headers);
//     // console.log(req.headers.authorization.split(' '));

//     if (!req.headers.authorization) {
//         return res.status(403).json({
//             status: 'Failed',
//             message: 'Auth Error: No Token'
//         })
//     }

//     jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, async (err, data) => {
//         if (err) {
//             return res.status(403).json({
//                 status: 'Failed',
//                 message: 'Auth Error: Token is not valid!',
//                 error: err.message
//             })
//         }

//         if (!data.isAdmin) {
//             return res.status(403).json({
//                 status: 'Failed',
//                 message: 'Auth Error: Not authorize!',
//                 error: err.message
//             })
//         }


//         console.log(data);
//         next();

//     })

// }


export default verifyUser;