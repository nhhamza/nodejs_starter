import {  IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  public name: string;

  @IsNumber()
  public admission: number;

  @IsNumber()
  public class: number;

  @IsString()
  public city: string;
}
