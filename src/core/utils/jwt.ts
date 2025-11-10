import jwt from 'jsonwebtoken';

type MyJwtPayload = { userId: string; role: string };

export class JwtService {
    private secret: string;
    private expiresIn: string;


    constructor(secret: string, expiresIn: string = "1d") {
        this.secret = secret;
        this.expiresIn = expiresIn;
    }


    sign(payload: MyJwtPayload): string {
        return (jwt as any).sign(payload, this.secret, { expiresIn: this.expiresIn })
    }

    verify<T = any>(token: string): T {
        return jwt.verify(token, this.secret) as T;
    }
}