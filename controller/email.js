var mailer = require('mailer');

var subject = ['报名表提交成功', '推荐人确认'],
    template = ['./controller/templates/success.txt', './controller/templates/confirm.txt']; // /controller

// type
// 0：报名表提交成功
// 1：推荐人确认
exports.send = function(to, type, data) {
    mailer.send({
        //server
        host : 'smtp.exmail.qq.com',
        port : '465',
        ssl : true,
        domain : 'smtp.exmail.qq.com',
        //detail
        to : to,
        //from : 'dianhr2012@gmail.com',
        from : 'hr@dian.org.cn',
        subject : subject[type],
        template : template[type],
        data : data,
        //auth
        authentication : 'login',
        username : 'hr@dian.org.cn',
        password : 'DianGroup2012'
    }, function(err, result) {
        if (err) {
			//console.log(err);
            console.log('[ERROR] email <' + subject[type] + '> to ' + to + ' sended failed');
        } else {
            console.log('[INFO] email <' + subject[type] + '> to ' + to + ' sended successfully');
        }
    });
}
