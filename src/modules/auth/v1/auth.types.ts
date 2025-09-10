export interface User {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    role: 'admin' | 'agent' | 'customer';
  }
  
  export interface JwtPayload {
    id: number;
    role: string;
  }
  
  export interface AuthRequest extends Express.Request {
    user?: JwtPayload;
  }
  
  export interface SignupRequest {
    name: string;
    email: string;
    password: string;
    role?: 'admin' | 'agent' | 'customer';
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }