/**
 * 字符串转UTF-8编码的方法，编写此方法的目的在于理解UTF-8编码方式
 * @param str 传入的字符串
 * 
 * 以下为不同范围的码点值对应不同字节长度的编码规则：
 *     0000 0000-0000 007F | 0xxxxxxx
 *     0000 0080-0000 07FF | 110xxxxx 10xxxxxx
 *     0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
 *     0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 */
function String2UTF8(str){
    let res = "";
    for(let i = 0; i< [...str].length; i++){
        let codePoint = str.codePointAt(i); //获得字符串码点
        if(codePoint <= 0x7F){
            res += "\\x" + codePoint.toString(16);  //直接转换为16进制即可
        }
        else if(codePoint <= 0x7FF){
            let code = paddingZero(codePoint, 11);
            res += bin2hex(`110${code.slice(0, 5)}`) + bin2hex(`10${code.slice(-6)}`);
        }
        else if(codePoint <= 0xFFFF){
            let code = paddingZero(codePoint, 16);   
            res += bin2hex(`1110${code.slice(0, 4)}`) + bin2hex(`10${code.slice(4, 10)}`) + bin2hex(`10${code.slice(-6)}`);
        }
        else if(codePoint <= 0x10FFFF){
            let code = paddingZero(codePoint, 21);   
            res += bin2hex(`11110${code.slice(0, 3)}`) + bin2hex(`10${code.slice(3, 9)}`) + bin2hex(`10${code.slice(9, 15)}`) + bin2hex(`10${code.slice(-6)}`);            
        }
    }
    return res;
}

/** 补全0 */
function paddingZero(codePoint, num){
    let code = codePoint.toString(2);
    if(code.length < num){
        code = "0".repeat(num - code.length) + code;
    }
    return code;
}

/**
 * 2进制字符串转为带\x的16进制字符串
 */
function bin2hex(str){
    return "\\x" + Number.parseInt(str, 2).toString(16);
}