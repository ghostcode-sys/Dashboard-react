const express = require('express');
const app = express();
const router = express.Router();
router.get("/server_cookies",(req, res) => {
    res.send("hello boys")
});

app.use(router);

app.use(express.static('frontend-dev-test/build'));
if(process.env.NODE_ENV == 'production'){
    app.use(express.static('frontend-dev-test/build'));
}
const port =process.env.PORT || 5000;
app.listen(port,()=>[
 console.log('listening')
])