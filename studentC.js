const StudentModel =require("../Models/studentM");
const Validator = require("./validation.js");

let createStudent = async(req,res)=>{
    try{
        let data =req.body; //shows in body in postman
        if(!Validator.isValidBody(data)){
            return res.status(404).send({msg:"No data provided"});
        }

        let{Student_Name, Email, Usn, Gender, Mobile, Password}=data;

        //more valid
        if(!Validator.isValidName.test(Student_Name)){
            return res.status(404).send({msg:"Invalid name"});
        }
        if(!Validator.isValidEmail.test(Email)){
            return res.status(404).send({msg:"Invalid email"});
        }
        if(!Validator.isValidMobile.test(Mobile)){
            return res.status(404).send({msg:"Invalid mobile"});
        }
        

        // validation
        if(!Validator.isValid(Student_Name)){
            return res.status(400).send({msg: " Enter Student name "})
        }
        if(!Validator.isValid(Email)){
            return res.status(400).send({msg: "Enter Email"})
        }
        if(!Validator.isValid(Usn)){
            return res.status(400).send({msg: " Enter Usn"})
        }
        if(!Validator.isValid(Gender)){
            return res.status(400).send({msg: "Enter Gender"})
        }
        if(!Validator.isValid(Mobile)){
            return res.status(400).send({msg: "Enter Mobile "})
        }
        if(!Validator.isValid(Password)){
            return res.status(400).send({msg: "Enter Password "})
        }
        // for same details
        let sameEmail = await StudentModel.findOne({Email})
        if(sameEmail){
            return res.status(400).send({msg: "Email exists"})
        }
        let sameUsn = await StudentModel.findOne({Usn})
        if(sameUsn){
            return res.status(400).send({msg: "USN exists"})
        }
        let sameMobile = await StudentModel.findOne({Mobile})
        if(sameMobile){
            return res.status(400).send({msg: "Mobile exists"})
        }
        


        let register = await StudentModel.create(data);
        return res
        .status(201)
        .send({
            status:true, 
            msg:"Student Registered successfully",
            data: register,
        
        })
    }catch (error){
        return res
        .status(500)
        .send({
            status:false, 
            msg:"Internal server error",

        });

}
};
module.exports = {createStudent}