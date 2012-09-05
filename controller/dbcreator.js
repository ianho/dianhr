var resume_fields = [
                     'name', 'sex', 'direction', 'hometown', 'number', 'college', 'address', 'email', 'mobile', 'highschool', 'graduate', //个人信息
                     'cet4', 'cet6', 'fail', 'gpa', //一棵学习情况
                     'award', 'recommender', 'recommenderemail', //学科竞赛获奖及推荐
                     'experience', //经验积累
                     'introduction', 'plan' //综合简介
                    ];

var query = '';

var Client = require('mysql').Client,
    client = new Client();

client.usr = 'root';
client.password = 'root';

//创建数据库
client.query('CREATE DATABASE dianhr DEFAULT CHARACTER SET utf8');
client.query('USE dianhr');

//创建简历数据表
query = 'CREATE TABLE resume(' +
        'id int auto_increment primary key,';
for (var i = 0; i < 18; i++) {
    query += resume_fields[i] + ' varchar(255) not null,';
}
query += resume_fields[18] + ' text not null,';
query += resume_fields[19] + ' text not null,';
query += resume_fields[20] + ' text not null)';
client.query(query);
console.log('database created !!!');
