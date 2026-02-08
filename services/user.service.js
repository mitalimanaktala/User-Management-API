import { id } from "zod/locales";
import { users } from "../data/users.js"
import User from "../models/user.js";

// export const deleteUserService = (id) => {
//     const index = users.findIndex(u => u.id === id);

//     if(index === -1){
//         return false;
//     }

//     users.splice(index, 1);
//     return true;
// }

// export const createUserService = (name, email) => {
//     const newUser = {
//         id: Date.now().toString(),
//         name: name,
//         email: email
//     }

//     users.push(newUser);
//     return newUser;
// }


export const createUserService = async(name, email,password, role) => {
    console.log("Processing data in service");
    const newUser = await User.create({
        name, 
        email,
        password,
        role
    });

    users.push("User created", newUser);
    return newUser;
}

// console.log(createUserService("Gaurika Bhatt", "gaurika@bhatt.gmail"));

// export const updateUserService = (id, updatedData) => {
//     const user = users.find(u => u.id === id);

//     if(!user) return null;

//     if(updatedData.name !== undefined){
//         user.name = updatedData.name;
//     }

//     if(updatedData.email !== undefined){
//         user.email = updatedData.email;
//     }
    
//     return user;
// }

// export const getUsersService = async() => {
//     const users = await User.find().sort({email:-1});
//     return users;
// }
export const getUsersService = async() => {
    const users = await User.find({age : {$gt : 22}});
    return users;
}

export const getUsersServiceisActive = async() => {
    const users = await User.find({isActive: true}).limit(5).skip(1);
    return users;
}

// export const updateUserService = async(id, data) => {
//     const updatedData = await User.findByIdAndUpdate(
//         id,
//         {$set:data},
//         {
//             new: true,
//             runValidators: true
//         }
//     )
//     return updatedData;
// }

export const updateUserByEmailService = async (email, data) => {
    const updatedData = await User.findOneAndUpdate(
        { email: email },
        { $set: data },
        {   
            new: true,
            runValidators: true
        }
    );
    return updatedData;
};

export const deleteServiceUser = async(email) => {
    const newUser = await User.findOneAndDelete({email});
    
    return newUser;
}