import { LoginInput } from './login/LoginInput';
import { LoginResponse } from './login/LoginResponse';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';

@Resolver()
export class LoginResolver {
    @Query(() => String)
    async hello(): Promise<string> {
        return 'Hello';
    }

    @Mutation(() => LoginResponse)
    async login(@Arg('data') { username, password }: LoginInput): Promise<LoginResponse> {
        try {
            console.log('Username Password', username, password);
            return {
                sucess: true,
            };
        } catch (err) {
            return {
                sucess: false,
                errors: [
                    {
                        path: 'Login',
                        message: `An error occurred ${err}`,
                    },
                ],
            };
        }
    }
}
