const express = require('express');
const port = 5000;

startExpress();

function startExpress() {
    const app = express();

    app.get('/transcription/get/:id', (req, res, next) => {
        console.log(`Received transcription request for video ID ${req.params.id}`);
        res.sendStatus(200);
    });

    app.listen(port, () => {
        console.log(`Express started on port ${port}`);
    });
}