import { Field, InputType } from 'type-graphql';
import { Length } from 'class-validator';

@InputType()
export class LoginInput {
    @Field()
    @Length(6, 15)
    username: string;

    @Field()
    @Length(6)
    password: string;
}
