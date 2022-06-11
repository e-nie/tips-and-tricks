import axios, { AxiosResponse } from 'axios';
// Core
import waait from 'waait';
import { ILogin } from '../types/auth';
import { ISignUp } from '../components/forms/SignUpForm/config';
import { ISignUpWithToken } from '../types';
import { ILoginFormShape } from '../components/forms/types';

const requestDelay = 0;

export const authApi = Object.freeze({
    async signUp(user: ISignUp): Promise<ISignUpWithToken> {
        const { data: newUser } = await axios.post<ISignUp, AxiosResponse<ISignUpWithToken>>(
            `${process.env.REACT_APP_API_URL}/auth/registration`,
            user,
        );

        await waait(requestDelay);

        return newUser;
    },
    async login(credentials: ILoginFormShape): Promise<ILogin> {
        const { email, password } = credentials;
        const { data } = await axios.get<ILogin>(
            `${process.env.REACT_APP_API_URL}/auth/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
                },
            },
        );

        await waait(requestDelay);

        return data;
    },
});
