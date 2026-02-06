// import { json } from "express";
import {users} from "../data/users.js"
import { createUserService, updateUserService} from "../services/user.service.js";
// import { use } from "react";


export const getUsers = (req, res) => {
    const {token} = req.headers;
    // console.log("req", req);
    console.log("token", token);
    

    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};

export const getUserById = (req, res) => {
    try {
        const { id } = req.params;

        const user = users.find(u => u.id === id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export const createUser = (req, res) => {
    try{
        const {name, email} = req.body;

        // VALIDATION
        // if(!name || !email){
        //     return res.status(400).json({
        //         success: false,
        //         message: "Name and email are required"
        //     });
        // }

        // const newUser = {
        //     id: Date.now().toString(),
        //     ...req.body
        //     // name,
        //     // email
        // };

        // users.push(newUser);

        const userBody = createUserService(name, email);

        res.status(201).json({
            success: true,
            data: userBody
        });

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateUser = (req, res) => {
    try{
        const {id} = req.params;
        const {name, email} = req.body;

        // const user = users.find(u => u.id === id);

        // console.log("User name: ", name);
        // console.log("User email: ", email);
        

        const updatedUser = updateUserService(id, req.body);

        if(!updateUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }


        // PARTIAL UPDATE
        // if(name) user.name = name;
        // if(email) user.email = email;
        
        res.status(200).json({
            success: true,
            data: updatedUser
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteUser = (req, res) => {
    try {
        const { id } = req.params;

        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const deletedUser = users.splice(index, 1);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser[0]
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};