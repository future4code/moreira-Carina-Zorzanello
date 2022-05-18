import * as jwt from "jsonwebtoken";
import {AuthenticationData} from '../type'

const expiresIn = "1d";

export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token;
}



export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};