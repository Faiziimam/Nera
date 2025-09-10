import bcrypt from "bcryptjs";
import supabase from "../../../config/database/db";
import jwt from 'jsonwebtoken';
import { JwtPayload, LoginRequest, SignupRequest } from "./auth.types";

import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET= process.env.JWT_SECRET

export const signUp = async ({name, email, password, role='customer'}:SignupRequest)=>{
    const hashPassword = await bcrypt.hash(password, 10);
    const {data, error} = await supabase.from('users').insert({
        name:name, email:email, password_hash:hashPassword, role:role
    }).select().single();
    if(error)throw error;
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({ id: data.id, role: data.role } as JwtPayload,JWT_SECRET, { expiresIn: '1h' });

    return {
        user:data,
        token
    };
}

export const logIn = async ({email, password}:LoginRequest)=>{
    const {data:user, error} = await supabase.from('users').select('*').eq('email',email).single();
    if(error)
    {
        throw error;
    }
    const validatePassword = await bcrypt.compare(password, user?.password_hash) 
    if(!user || !validatePassword)
    {
        throw new Error("Invalid password");
    }
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({id:user?.id, role:user.role} as JwtPayload, JWT_SECRET, {expiresIn:'1h'})
    return{
        user, token
    }
}