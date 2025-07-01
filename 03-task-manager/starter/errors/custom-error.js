
class CustomAPIError  extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const crateCustomeError = (msg, statusCode) => {

return new CustomAPIError(msg,statusCode)

}

module.exports = { CustomAPIError, crateCustomeError };