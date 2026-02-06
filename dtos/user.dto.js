export const validateCreateUserDTO = (req, res, next) => {
    console.log("Using DTO to check Data Validation");
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }
    next();
}