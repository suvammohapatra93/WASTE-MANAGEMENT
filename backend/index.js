import e from "express";
import 'dotenv/config' ;
import cors from "cors";
import connectDB from "./DB/db.js";
import bodyParser from "body-parser";
import AuthRouter from "./Routes/AuthRouter.js";
import RecycleRouter from "./Routes/RecycleRouter.js"
import PaymentRouter from "./Routes/PaymentRouter.js"
const app = e();

const PORT = process.env.PORT || 8080;
connectDB()

app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter)
app.use('/recycle',RecycleRouter)
app.use('/payment',PaymentRouter)
app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})