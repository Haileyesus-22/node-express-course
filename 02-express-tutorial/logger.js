const logger = (req,res, next) => {
        const method = req.method;
        const url = req.url;
        const time = new Date().getFullYear();
        console.log(method,url,time);
        next(); // Call the next middleware or route handler
        
}

module.exports  = logger;