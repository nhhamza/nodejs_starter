import { CreateStudentDto } from "@/dtos/students.dto";
import { NextFunction, Request, Response } from 'express';
import { Student } from "@/interfaces/student.interface";
import authMiddleware from "@/middlewares/auth.middleware";
import { validationMiddleware } from "@/middlewares/validation.middleware";
import StudentService from "@/services/students.service";
import { Body, Controller, Get, HttpCode, Post, Req, UseBefore } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";


// @UseBefore(authMiddleware)
@Controller()
export class StudentsController {
  public studentService = new StudentService();

  @Get('/students')
  @OpenAPI({ summary: 'Return a list of students' })
  async getStudents(@Req() request: any) {
    const findAllStudentsData: Student[] = await this.studentService.findAll(request);
    return { data: findAllStudentsData, message: 'findAll' };
  }

  @Post('/students')
  @HttpCode(201)
  @UseBefore(validationMiddleware(CreateStudentDto, 'body'))
  @OpenAPI({ summary: 'Create a new student' })
  async createUser(@Body() studentData: CreateStudentDto) {
    const createStudnetData: Student = await this.studentService.createStudent(studentData);
    return { data: createStudnetData, message: 'created' };
  }

// //Insert new student
// exports.create = (req, res) => {
//     if (!req.body.name) {
//         res.status(400).send({
//         message: "Content can not be empty!"
//     });
//     return;
//     }
    
//   // Create a student
//   const student = {
//     name: req.body.name,
//     admission: req.body.admission,
//     class:req.body.class,
//     city:req.body.city
//   };

//   // Save student in the database
//   Student.create(student)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Error occurred while creating the Student."
//       });
//     });
// };

// // Retrieve all students
// exports.findAll = (req, res) => {

//   const name = req.query.name;
//   var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

//   Student.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving data."
//       });
//     });
  
// };

// //search a single student with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Student.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Student with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Student with id=" + id
//       });
//     });
// };

// // Update a student details by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Student.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Successfully Updated Student."
//         });
//       } else {
//         res.send({
//           message: `Can't update student with id=${id}.Something has gone wrong!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Can't update Student with id=" + id
//       });
//     });
// };

// // remove a student with the given id 
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Student.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Successfully deleted student!"
//         });
//       } else {
//         res.send({
//           message: `Something went wrong!Can't delete Student with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Can't delete Student with id=" + id
//       });
//     });
 };