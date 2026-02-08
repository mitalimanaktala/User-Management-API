// import { json } from "express";
import {users} from "../data/users.js"
import { createUserService, getUsersService, getUsersServiceisActive, updateUserByEmailService, deleteServiceUser} from "../services/user.service.js";
// import { use } from "react";


export const getUsers = async (req, res) => {
    try {
        const { token } = req.headers;
        console.log("token", token);

        const users = await getUsersService();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const isActive = async(req, res)=> {
    const users = await getUsersServiceisActive();
    res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });

}

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


export const createUser = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;

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

        // const userBody = createUserService(name, email);
        const userBody = await createUserService(name, email, password, role);

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
        

        // const updatedUser = updateUserService(id, req.body);
        const updatedUser = updateUserByEmailService(email, req.body);

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

export const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;

        // const index = users.findIndex(u => u.id === id);

        // if (index === -1) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "User not found"
        //     });
        // }

        // const deletedUser = users.splice(index, 1);
        const deletedUser = await deleteServiceUser(email);

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