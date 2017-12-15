var validate   = {
	isCardNo: function (card) {
		var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
		if (reg.test(card) === false) {
			return false;
		}
		return true;
	},
	//检查生日是否正确
	checkBirthday: function (card) {
		var len = card.length;
		//身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
		if (len == '15') {
			var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
			var arr_data   = card.match(re_fifteen);
			var year       = arr_data[2];
			var month      = arr_data[3];
			var day        = arr_data[4];
			var birthday   = new Date('19' + year + '-' + month + '-' + day);
			return verifyBirthday('19' + year + "-" + month + "-" + day);
		}
		//身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
		if (len == '18') {
			var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
			var arr_data    = card.match(re_eighteen);
			var year        = arr_data[2];
			var month       = arr_data[3];
			var day         = arr_data[4];
			var birthday    = new Date(year + '-' + month + '-' + day);
			return (year + "-" + month + "-" + day);
		}
		return false;
	},
	isName: function (value) {
		// if(value.match(/^([\u4e00-\u9fa5]|[0-9a-zA-Z]|[.])+$/)){
		if (value.match(/^([\u4e00-\u9fa5]{2,20})+$/)) {
			return true;
		}
		else {
			return false;
		}
	},
	isEnName: function (value) {
		if (value.match(/^([0-9a-zA-Z]|[.]){1,30}$/)) {
			return true;
		} else {
			return false;
		}
	},
	isName2: function (value) {
		if (value.match(/^([a-zA-Z]|[.]|[\u4e00-\u9fa5]){2,30}$/)) {
			return true;
		} else {
			return false;
		}
	},
	isInvoice: function (value) {
		if (value.match(/^([\u4e00-\u9fa5]|[a-zA-Z]|[.|(|)|（|）]){2,30}$/)) {
			return true;
		} else {
			return false;
		}
	},
	isNum: function (s) {
		var patrn = /^[0-9]{1,20}$/;
		if (!patrn.exec(s)) return false
		return true;
	},
	isNum2: function (e) {  //小数点后两位
		var pattern = /^(\-)*(\d+)\.(\d\d).*$/;
		//var pattern =/^(\d)*(.\d{2})?$/;
		if (!pattern.test(e)) {
			return false;
		} else {
			return true;
		}
	},
	isNum3: function (e) {  //可以整数，或者小数点最多两位
		var pattern = /^(\d)*.\d{1,2}?$/;
		if (!pattern.test(e)) {
			return false;
		} else {
			return true;
		}
	},
	isPassport: function (value) {
		// /(P\d{7})|(G\d{8})/
		if (value.match(/^([0-9a-zA-Z]{8}|[0-9a-zA-Z]{9})$/)) {
			return true;
		} else {
			return false;
		}
	},
	isAddress: function (value) {
		if (value.match(/^([0-9a-zA-Z]|[\u4e00-\u9fa5]|[-.]){2,50}$/)) {
			return true;
		} else {
			return false;
		}

	},
	isMobile: function (value) {
		if (value.match(/^1[3|4|5|7|8][0-9]\d{8}$/)) {
			return true;
		} else {
			return false;
		}
	}
	,
	isEmail: function (email) {
		if (email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
			return true;
		} else {
			return false;
		}
	}
};
module.exports = validate;
