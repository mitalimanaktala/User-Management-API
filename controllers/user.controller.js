// import { json } from "express";
import { users } from "../data/users.js";
import {createUserService, getUsersService, getUsersServiceisActive, updateUserByEmailService, deleteServiceUser, createPostService, getPostUsersService
} from "../services/user.service.js";
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

export const isActive = async (req, res) => {
    try {
        const users = await getUsersServiceisActive();

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
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required"
            });
        }

        /*
        if(!name || !email){
            return res.status(400).json({
                success: false,
                message: "Name and email are required"
            });
        }

        const newUser = {
            id: Date.now().toString(),
            ...req.body
            // name,
            // email
        };

        users.push(newUser);
        */

        const userBody = await createUserService(name, email, password, role);

        res.status(201).json({
            success: true,
            data: userBody
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        /*
        const user = users.find(u => u.id === id);

        console.log("User name: ", name);
        console.log("User email: ", email);

        // PARTIAL UPDATE
        if(name) user.name = name;
        if(email) user.email = email;
        */

        const updatedUser = await updateUserByEmailService(email, req.body);

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;

        /*
        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const deletedUser = users.splice(index, 1);
        */

        const deletedUser = await deleteServiceUser(email);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, content, user } = req.body;

        const post = await createPostService(title, content, user);

        res.status(201).json({
            success: true,
            data: post
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await getPostUsersService();

        res.status(200).json({
            success: true,
            data: post
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
