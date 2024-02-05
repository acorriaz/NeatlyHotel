import { Router } from "express";
import { supabase } from "../utils/db.js"

const hotelRouter = Router();

hotelRouter.get("/users", async function (req, res) {
    let resultUsers = null;
    try {
        resultUsers = await supabase.from("users").select("*");
        return res.status(200).json(resultUsers.data);
    } catch (error) {
        return res.status(500).json(resultUsers.error);
    }
});

export default hotelRouter;


