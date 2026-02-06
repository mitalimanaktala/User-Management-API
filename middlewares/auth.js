let success = true;

export const checkAuth = (req, res, next) => {
    const body = req.body;
    console.log("body", body);

    const {authorization} = req.headers;
    console.log(authorization);
    
    if(success){
        console.log("Auth checked"); 
        next();
    }else{
        console.log("Auth Failed !!");
        res.status(400).json({
            success: false,
            message: "Failed auth"
        });
    }
};

export const validateUserId = (req, res, next) => {

    const {id} = req.params;
    console.log("User id: ", id);
    
    if(!id){
        console.log("Invalid user id");
        
        return res.status(400).json({
            success: false,
            message: "user ID required"
        });
        
    };
    next();
};


export const validateZod = (schema) => (req, res, next) => {
    let result = schema.safeParse(req.body);
    console.log("Body parsing using ZOD..!!");
    console.log("Result errors: ", result);
    
    if(!result.success){
        return res.status(400).json({
            success: false,
            errors: result.error.message,
            message: "Create User Zod failed"
        });
    }
    req.body = result.data;
    next();  
};