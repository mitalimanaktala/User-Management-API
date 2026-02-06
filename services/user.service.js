import { users } from "../data/users.js"

// export const deleteUserService = (id) => {
//     const index = users.findIndex(u => u.id === id);

//     if(index === -1){
//         return false;
//     }

//     users.splice(index, 1);
//     return true;
// }

export const createUserService = (name, email) => {
    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email
    }

    users.push(newUser);
    return newUser;
}

console.log(createUserService("Mitali", "mitalimanaktala@gmail"));

export const updateUserService = (id, updatedData) => {
    const user = users.find(u => u.id === id);

    if(!user) return null;

    if(updatedData.name !== undefined){
        user.name = updatedData.name;
    }

    if(updatedData.email !== undefined){
        user.email = updatedData.email;
    }
    
    return user;
}