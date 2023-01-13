import express, { Request, Response } from 'express';
import Document from '../schema/documentSchema.js'

const router = express.Router();

router.get("/docs", (req, res) => {
    res.send('Hello World')
})

module.exports = router