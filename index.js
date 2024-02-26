import dotenv from 'dotenv'
import express from 'express'
import userRoutes from './routers/userRoutes.js'
import instaUsersRoutes from './routers/instaUsersRoutes.js'
import productRoutes from './routers/productRoutes.js'
import counterRoutes from './routers/counterRoutes.js'
import randomGenRoutes from './routers/randomGenRoutes.js'
import basicServerRoutes from './routers/basicServerRoutes.js'
import bodyParser from 'body-parser';
import cookieparser from 'cookie-parser';
const PORT=5000;
dotenv.config();
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieparser())
app.use("/api/user",userRoutes)
app.use("/api/instaUser",instaUsersRoutes)
app.use('/api/product',productRoutes)
app.use('/api/counter',counterRoutes)
app.use('/api',randomGenRoutes)
app.use('/app/basicServer',basicServerRoutes)
app.listen(PORT,()=>{
    console.log(`Server is listen at port ${PORT}`);
})