import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../../graphql-types/FieldError';

@ObjectType()
export class LoginResponse {
    @Field()
    sucess: boolean;

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
}
