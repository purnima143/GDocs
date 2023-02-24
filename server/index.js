import { Server } from "socket.io";
import Connection from './database/db.js'
import { getDocument, updateDocument } from "./controller/documentController.js";
import express from 'express'
import Document from './schema/documentSchema.js'
import cors from "cors";
const PORT = 9000
Connection()
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const httpServer = app.listen(PORT, () => { console.log("Server listening on PORT ", PORT) });
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

app.use(cors())

app.get('/', async (req, res) => {
    try {
        const useremail = req.query.user
        console.log("useremail", useremail)
        const document = await Document.find({ username: useremail })
        res.status(200).json({
            data: document,
        })
    }
    catch (error) {
        console.log("error is:", error)
    }

})
io.on('connection', socket => {
    socket.on('get-document', async (documentId, fileName, username) => {
        const document = await getDocument(documentId, fileName, username)
        socket.join(documentId)
        socket.emit('load-document', document.data)
        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta)
        })
        socket.on('save-document', async data => {
            await updateDocument(documentId, data)
        })

    })
})