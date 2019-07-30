const express = require('express');
const port = 5000;

startExpress();

function startExpress() {
    const app = express();

    app.listen(port, () => {
        console.log(`Express started on port ${port}`);
    });
}