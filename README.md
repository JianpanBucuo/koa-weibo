### 数据库

#### 外键

创建外键
更新限制 & 删除级联
连表查询

#### squelize

ORM - Object Relational Mapping
对象关系映射

建模（外键） & 同步到数据库

增删改查 & 连表查询

#### ORM知识点

1. 数据表，用js中的模型（class 或 对象）代替
2. 一条或多条记录，用js中一个对象或数组代替
3. sql语句 用对象方法代替


#### koa2 开发环境搭建

1. 配置 eslint 以及 pre-commit
2. insepect调试
3. 404页和错误页

#### redis
redis 内存数据库 -〉 公共数据的存储 不因用户的访问而有差异的情况
mysql 硬盘数据库

#####　redis下载安装使用

https://www.runoob.com/redis/redis-install.html
npm install redis --save-dev
##### 启动 redis server
打开cmd:命令 redis-server
再次打开cmd: redis-cli

key-value 操作形式
命令 set name 'nic'
     get name 
     keys * 查看所有key
     FLUSHALL 清空所有key



开启一个node服务，相当于开启一个 进程
进程和进程之间是数据隔离的

npm install koa-redis koa-generic-session --save

koa-redis koa连接redis的工具
koa-generic-session koa生成session的工具

git stash
git stash pop  


多进程  日志存储


预防 xss攻击

npm install xss --save


### 线上环境
1. 将代码部署到服务器
2. 执行命令重启服务

pm2 nodejs进程管理工具
npm install pm2 --save

1. 进程守护： 服务器挂掉之后自动重启
2. 多进程： 更好的利用CPU和内存

pm2的使用

1. 启动服务
2. 常用命令
3. 进程守护

npm install pm2 --save

pm2 start 
pm2 list // 查看服务进程的列表
pm2 restart [id][name] //重启服务
pm2 stop [id][name] //停止服务
pm2 delete [id][name] //删除服务
pm2 info [id][name] 进程信息
pm2 log [id][name]  看日志
pm2 monit [id][name]  查看监控

#### pm2配置
1. 配置服务信息
2. 配置服务数量
3. 配置日志目录

操作系统会自动限制一个进程的最大可用内存， 所以多进程可以更好的利用内存和cpu

进程之间无法通讯
1. 不能用session做缓存
2. 图片要做单独的文件服务