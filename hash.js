var crypto = require('crypto')

// console.log(crypto.getHashes())

var fs = require('fs');

function hashAlgorithm(algorithm) {
    var date1 = new Date();

    // 读取文件内容
    var filename = "README.md";
    var txt = fs.ReadStream(filename);

    var shasum = crypto.createHash(algorithm);
    txt.on('data', function(d) {
        shasum.update(d);
    });

    txt.on('end', function() {
        var d = shasum.digest('hex');
        var date2 = new Date();

        console.log(algorithm + ', ' + (date2 - date1) + 'ms, ' + d);
    });
}

// 依次使用哈希方法
function doHash(hashs) {
    hashs.forEach(function(name) {
        hashAlgorithm(name);
    })
}

//var algs = crypto.getHashes();
var algs = ['md5', 'sha', 'sha1', 'sha256', 'sha512', 'RSA-SHA', 'RSA-SHA1', 'RSA-SHA256', 'RSA-SHA512'];
doHash(algs);