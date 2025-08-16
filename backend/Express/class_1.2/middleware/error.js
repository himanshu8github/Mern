
const errorHandler = (err, req, res, next) => {
    if(err.status){
        res.status(err.status).json({mes : err.message});
    } else {
    res.status(500).json({msg: err.message || 'Something went wrong on the server',});
    }
  console.error(err.stack); 
 
};

export default errorHandler;
