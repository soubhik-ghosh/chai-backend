//const asycHandler = () => {}

const asynHabdler = ( requestHandler ) => {
    (req , res , next ) => {
        Promise.resolve(requestHandler(req , res , next ))
        .catch(( err ) => next(err))
    }
}


export {asycHandler}


/*

const asyncHandler = (fn) => asyns(req , res , next ) => {
    try {

        await fn(req , res ,next )

    } catch(error){
        resizeBy.status(err.code || 500)
        success: false,
        message: err.message
    }
}

*/
