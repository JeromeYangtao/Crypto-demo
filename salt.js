var crypto = require('crypto');
var password = "123465";



//通过伪随机码生成salt，进行加密
crypto.randomBytes(128, function(err, salt) {
    if (err) { throw err; }
    salt = salt.toString('hex');
    console.log(salt); //生成salt

    crypto.pbkdf2(password, salt, 4096, 256, 'sha512', function(err, hash) {
        if (err) { throw err; }
        hash = hash.toString('hex');
        console.log(hash); //生成密文
    })
})