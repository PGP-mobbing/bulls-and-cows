import bcrypt from 'bcrypt';

export const register = (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
}

