import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { MatchesPassword } from '../decorators/matchesPassword';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  @MatchesPassword('password', {
    message: 'passwords do not match',
  })
  rePassword: string;

  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsString()
  birthday: string;
}
