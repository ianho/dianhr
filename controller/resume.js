var DBO = require('./dbo'),
    dbo = new DBO.dbo();

var email = require('./email');

var fields = [
              'name', 'sex', 'direction', 'hometown', 'number', 'college', 'address', 'email', 'mobile', 'highschool', 'graduate', //个人信息
              'cet4', 'cet6', 'fail', 'gpa', //一棵学习情况
              'award', 'recommender', 'recommenderemail', //学科竞赛获奖及推荐
              'experience', //经验积累
              'introduction', 'plan' //综合简介
             ]

exports.upload = function(value) {
    dbo.insert('resume', fields, value);
    console.log('[INFO] resume of ' + value[0] + ' added');
    var name = value[0];
    var to = value[7];
    email.send(to, 0, { name : name });
    if (value[16] != '' && value[17] != '') {
        var recommander = value[16];
        to = value[17];
        email.send(to, 1, { recommander : recommander, name : name });
    }
}
