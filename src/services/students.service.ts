import { NextFunction, Request, Response } from 'express';
import { hash } from 'bcrypt';
// import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { Student } from '@interfaces/student.interface';
import { isEmpty } from '@utils/util';
import { CreateStudentDto } from '@/dtos/students.dto';
import { BaseError } from 'sequelize/types';

const db = require('../models');
const students = db.students;
const Op = db.Sequelize.Op;

class StudentService {
  public async findAll(res: Response): Promise<Student[]> {
    //  try {
      var condition = null;
      res.statusMessage ="450";
      res.statusCode = 451;
      throw new HttpException(451,'divide by zero!')
      return await students.findAll({ where: condition });
    // } catch (error) {
    //   res.statusMessage ="450";
    //   res.statusCode = 451;

    // }
  }

  public async createStudent(createStudent: CreateStudentDto): Promise<Student> {
    if (isEmpty(createStudent)) throw new HttpException(400, "You're not StudentData");

    // const findUser: User = this.users.find(user => user.email === userData.email);
    // if (findUser) throw new HttpException(409, `Your email ${userData.email} already exists`);
    const student: Student = { name: createStudent.name, admission: createStudent.admission, class: createStudent.class, city: createStudent.city };
    const h = await students.create(createStudent);

    return createStudent;

    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving data."
    //   });
    // });
  }
  //   public async findUserById(userId: number): Promise<User> {
  //     const findUser: User = this.users.find(user => user.id === userId);
  //     if (!findUser) throw new HttpException(409, "You're not user");

  //     return findUser;
  //   }

  //   public async createUser(userData: CreateUserDto): Promise<User> {
  //     if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //     const findUser: User = this.users.find(user => user.email === userData.email);
  //     if (findUser) throw new HttpException(409, `Your email ${userData.email} already exists`);

  //     const hashedPassword = await hash(userData.password, 10);
  //     const createUserData: User = { id: this.users.length + 1, ...userData, password: hashedPassword };
  //     this.users = [...this.users, createUserData];

  //     return createUserData;
  //   }

  //   public async updateUser(userId: number, userData: CreateUserDto): Promise<User[]> {
  //     if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //     const findUser: User = this.users.find(user => user.id === userId);
  //     if (!findUser) throw new HttpException(409, "You're not user");

  //     const hashedPassword = await hash(userData.password, 10);
  //     const updateUserData: User[] = this.users.map((user: User) => {
  //       if (user.id === findUser.id) user = { id: userId, ...userData, password: hashedPassword };
  //       return user;
  //     });

  //     return updateUserData;
  //   }

  //   public async deleteUser(userId: number): Promise<User[]> {
  //     const findUser: User = this.users.find(user => user.id === userId);
  //     if (!findUser) throw new HttpException(409, "You're not user");

  //     const deleteUserData: User[] = this.users.filter(user => user.id !== findUser.id);
  //     return deleteUserData;
  //   }
}

export default StudentService;
