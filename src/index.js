import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()

.then( () => {
    app.on("error", (error) => {
        console.log("Server Error: ", error);
        process.exit(1);
    });    
    app.listen(process.env.PORT ||  8000, () =>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection fail ! !",err)
})











