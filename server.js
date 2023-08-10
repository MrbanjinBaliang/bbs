var express = require('express');
var app = express()
    //部署静态资源目录
app.use(express.static(__dirname + '/dist'));
app.get('/person', (req, res) => {
    res.send({
        name: 'Banjin',
        age: 22
    })
})
app.listen(8081, (error) => {
    if (!error) {
        console.log('服务器启动成功  ！！！！');
    }
})