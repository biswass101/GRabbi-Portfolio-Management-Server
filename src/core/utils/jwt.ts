import jwt from 'jsonwebtoken';

export interface IJwtConfig {
  secret: string;
  expiresIn?: string;
}

interface IMyJwtPayload { 
    sub: string; 
    role: string;
    [key : string] : any
};

export class JwtService {
    private secret: string;
    private expiresIn: string;


    constructor(config: IJwtConfig) {
        this.secret = config.secret;
        this.expiresIn = config.expiresIn ?? "1d";
    }


    sign(payload: IMyJwtPayload, options?: Partial<IJwtConfig>): string {
        return (jwt as any).sign(
            payload, 
            options?.secret ?? this.secret, 
            { 
                expiresIn: options?.expiresIn ?? this.expiresIn 
            }
        )
    }

    verify<T = any>(token: string, secret?: string): T {
        console.log("Token", token)
        console.log("Secret", secret);
        return jwt.verify(token, secret ?? this.secret) as T;
    }
}