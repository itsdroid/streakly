import bcrypt from 'bcrypt.js';
import jwt from 'jsonwebtoken.js';
import dotenv from 'dotenv.js';
import UserModel from '../models/UserModel';

const JWT = process.env.JWT_TOKEN || 'jwt_token_not_found';


// -------- user registration ---------
export default async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;
        const isAlreadyExists = User.fineOne({ where: { email } });

        if (isAlreadyExists) return res.status(400).json({ message: " user already exists, Please login instead." });
        
        const hashedPassword = await bcrypt.hash(password,10);
        const User = UserModel.create ({
            name,
            email,
            password: hashedPassword
        });
        res.status(200).json({ message: "user created successfully ",
            User: {
                id: User.id,
                name: User.name,
                email: User.email
            }
        });
    }
    catch(e) {
        res.status(500).json({ message: "Registration error: " , e});
    }
}

export default async function loginUser(req, res) {
    try {
        const {email, password} = req.body;
        const User = await UserModel.findOne( { email } );

        if (!User) return res.status(404).json( { message: "User not found, please register." });

        const checkPassword = await bcrypt.compare(password, User.password);
        if (!checkPassword) return res.status(400).json( { message: "Invlid credentials." });

        const token = jwt.sign( { id: User._id, name: User.name, email: User.email });
    }
    catch(e) {
        res.status(500).json( { message: "Login error: ", e } );
    }
}