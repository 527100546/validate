# devtools-debugger

## Install 安装

```
    npm install validate-form1
```


## 使用方法

```html
<script>
	var validate = require("validate-form1");
	validate.isCardNo(cart) // 验证身份证
	checkBirthday(cart) // 根据身份证号码匹配生日
	isName //匹配中文名字2-20个字符
	isEnName //匹配英文名字，支持数字+英文+.  (1-30个字符)
	isName2 //中文+英文+. （2-30）个字符
      isInvoice //发票抬头 中文+数字+()+.  (2-30个字符)
	isNum //数字 1-20个字
	isNum2 //数字，必须有小数点并且两位
      isNum3 可以数字，也可以小数点，但小数点后最多两位
	isPassport 护照，9位长度，中文+英文+数字字母+-.
	isAddress 地址，中文+英文+数字字母+-. （2-50）个字
	isMobile 匹配手机号码
	isEmail 匹配邮箱



</script>
```


## Support

- Chrome DevTools
- Safari DevTools
- Firefox DevTools
- Opera DevTools
- Firebug
- Firebug Lite
