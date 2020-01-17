function eAlert(text){
	siteAlert("에러", text, "error");
}

function wAlert(text){
	siteAlert("주의", text, "warning");
}

function sAlert(title, text){
	//siteAlert("Success!", text, "success");
	//swal("", text);
	swal({
		title: title,
		text: text,
		confirmButtonText: "OK",
		html: true 
	});
}

function infoSweetAlert(text){
	swal({
		title: '알림',
		text: text,
		confirmButtonText: "OK",
		html: true 
	});
}

function siteAlert(title, text, type){
	if(title == ""){
		title = "확인";
	}
	swal(title, text, type);
}

// 로그인 필수인 곳에 로그인 확인 
function loginConfirmAlert(url){
	siteConfirmCallBack("알림", "로그인이 필요합니다.", function(result){
		if(result){
			if(url == 'undefined' || url == null || url == 'null' || url == ''){
				location.href = "/login.do?returnUrl="+encodeURIComponent(location.pathname+location.search);
			}else{
				location.href = "/login.do?returnUrl="+encodeURIComponent(url);
			}
		}
	});
}

// 로그인 확인(본인인증 필수) 
function authConfirmAlert(url){
	siteConfirmCallBack("알림", "본인인증이 필요합니다.", function(result){
		if(result){
			if(url == 'undefined' || url == null || url == 'null' || url == ''){
				location.href = "/login.do?returnUrl="+encodeURIComponent(location.pathname+location.search);
			}else{
				location.href = "/login.do?returnUrl="+encodeURIComponent(url);
			}
		}
	});
}

//로그인 필수인 곳에 로그인 확인 
function officeLoginConfirmAlert(siteKey, url){
	siteConfirmCallBack("알림", "로그인이 필요합니다.", function(result){
		if(result){
			if(url == 'undefined' || url == null || url == 'null' || url == ''){
				location.href = "/office/"+siteKey+"/login.do?returnUrl="+encodeURIComponent(location.pathname+location.search);
			}else{
				location.href = "/office/"+siteKey+"/login.do?returnUrl="+encodeURIComponent(url);
			}
		}
	});
}

// 로그인 확인(본인인증 필수) 
function officeAuthConfirmAlert(siteKey, url){
	siteConfirmCallBack("알림", "본인인증이 필요합니다.", function(result){
		if(result){
			if(url == 'undefined' || url == null || url == 'null' || url == ''){
				location.href = "/office/"+siteKey+"/login.do?returnUrl="+encodeURIComponent(location.pathname+location.search);
			}else{
				location.href = "/office/"+siteKey+"/login.do?returnUrl="+encodeURIComponent(url);
			}
		}
	});
}

function siteConfirmCallBack(title, text, type, callback){
	swal({
		title: title,
		text: text,
		type: type,
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Yes",
		cancelButtonText: "No",
		closeOnConfirm: true,
		closeOnCancel: true
	}, function(isConfirm) {
		callback(isConfirm);
	});
	
	//e.preventDefault;
}

function siteConfirmCallBack(title, text, callback){
	swal({
		title: title,
		text: text,
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Yes",
		cancelButtonText: "No",
		closeOnConfirm: true,
		closeOnCancel: true
	}, function(isConfirm) {
		callback(isConfirm);
	});
	
	//e.preventDefault;
}

function siteConfirmOppositeCallBack(title, text, callback){
	swal({
		title: title,
		text: text,
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "No",
		cancelButtonText: "Yes",
		closeOnConfirm: true,
		closeOnCancel: true
	}, function(isConfirm) {
		callback(isConfirm);
	});
	
	e.preventDefault;
}

function siteOkAlertCallBack(title, text, callback){
	swal({
		title: title,
		text: text,
		showCancelButton: false,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "확인",
		closeOnConfirm: true,
		html: true
	}, function(isConfirm) {
		callback(isConfirm);
	});
	
	e.preventDefault;
}

function siteConfirmTypeCallBack(title, text, type, callback){
	swal({
		title: title,
		text: text,
		type: type,
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Yes",
		cancelButtonText: "No",
		closeOnConfirm: true,
		closeOnCancel: true
	}, function(isConfirm) {
		callback(isConfirm);
	});
	
	e.preventDefault;
}


/**
 * type : success, info, warning, error
 * message : text message
 */
function showSwalAlert(type, title, message){
	
	if(type == null || type == ""){
		type = "info";
	}
	
	if(title == null || title == ""){
		title = "정보";
	}
	
	swal({
		title: title,
		text: message,
		type: type,
		confirmButtonText: "OK",
		html: true 
	});
}

/**
 * type : success, info, warning, error
 * message : text message
 */
function showSwalAlertFocus(type, title, message, focusId){
	
	if(type == null || type == ""){
		type = "info";
	}
	
	if(title == null || title == ""){
		title = "정보";
	}
	
	swal({
		title: title,
		text: message,
		type: type,
		confirmButtonText: "OK",
		html: true,
		closeOnConfirm: false
	},
		function(){
			swal.close();
			$(focusId).focus();
		}
	);
}

/**
 * type : success, info, warning, error @see bootstrap css
 * position : toast-top-right, toast-bottom-right, toast-bottom-left, toast-top-left, toast-top-full-width, toast-bottom-full-width"
 * message : text message
 */
function showToastAlert(type, position, title, message){
	
	if(position == null || position == ""){
		position = "toast-bottom-left";
	}
	
	if(type == null || type == ""){
		type = "info";
	}
	
	if(title == null || title == ""){
		title = "정보";
	}
	
    toastr.options = {
  		  "closeButton": true,
  		  "positionClass": position,
  		  "onclick": null,
  		  "showDuration": "1000",
		  "hideDuration": "1000",
		  "timeOut": "3000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
  		}
  toastr[type](message, title);
}

function showToast(message){
	showToastAlert(null, null, null, message);
}

function errorAlert(message){
	showToastAlert("error", "toast-bottom-left", "오류", message);
}

function successAlert(message){
	showToastAlert("success", "toast-bottom-left", "성공", message);
}

function warningAlert(message){
	showToastAlert("warning", "toast-bottom-left", "알림", message);
}

function cutstr(str, len){
	var tail = "...";
	
	if( str.length <= len){
		return str + tail;
	}
	
	var rtn = "";
	rtn = str.substring(0, len);
	rtn += rtn + tail;
	
	return rtn;
}

function emailcheck(strValue){
	var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
	//입력을 안했으면
	if(strValue.lenght == 0){
		return false;
	}
	//이메일 형식에 맞지않으면
	if (!strValue.match(regExp)){
		return false;
	}
	return true;
}

function selectPage_func(data){
	var frm = $("form#listForm")[0];		
	frm.pgno.value = data;
	frm.submit();
}

// making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
function strip_tags (input, allowed) {
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); 
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) { return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''; });
}

function unique(array) {
	var result = [];
	$.each(array, function(index, element) {     // 배열의 원소수만큼 반복
		if ($.inArray(element, result) == -1) {  // result 에서 값을 찾는다.  //값이 없을경우(-1)
			result.push(element);                // result 배열에 값을 넣는다.
		}
	});
	return result;
}

function remove(arr, value) {
	var i, len;
	if (arr.indexOf) { // IE9+,  다른 모든 브라우져
		i = arr.indexOf(value);
		if(i !== -1) {
			arr.splice(i, 1);
		}
	} else { // IE8 이하
		len = arr.length;
		for (i = 0; i < arr.len; i++) {
			if (arr[i] === value) {
				arr.splice(i, 1);
				return;
			}
		}
	}
}

function showDivMessage(id, message){
	// get the reference of the div
	var $messageDiv = $("#"+id); 
	// show and set the message
	$messageDiv.show("slow").html('<span class="label label-default">' + message + '</span>'); 
	// 3 seconds later, hide
	setTimeout(function(){ $messageDiv.hide("slow").html('');}, 4300); 		
}

function autoHypenPhone(str){
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	if( str.length < 4){
		return str;
	}else if(str.length < 7){
		if(str.substr(0, 2)=="02"){
			tmp += str.substr(0, 2);
			tmp += '-';
			tmp += str.substr(2);
		}else{
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3);
		}
		return tmp;
	}else if(str.length < 11){
		if(str.substr(0, 2)=="02"){
			if(str.length >= 10){
				tmp += str.substr(0, 2);
				tmp += '-';
				tmp += str.substr(2, 4);
				tmp += '-';
				tmp += str.substr(6, 4);				
			}else{
				tmp += str.substr(0, 2);
				tmp += '-';
				tmp += str.substr(2, 3);
				tmp += '-';
				tmp += str.substr(5);
			}
		}else{
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3, 3);
			tmp += '-';
			tmp += str.substr(6);
		}
		return tmp;
	}else{		
		if(str.substr(0, 2)=="02"){
			if(str.length >= 10){
				tmp += str.substr(0, 2);
				tmp += '-';
				tmp += str.substr(2, 4);
				tmp += '-';
				tmp += str.substr(6, 4);				
			}else{
				tmp += str.substr(0, 2);
				tmp += '-';
				tmp += str.substr(2, 3);
				tmp += '-';
				tmp += str.substr(5);
			}
		}else{
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3, 4);
			tmp += '-';
			tmp += str.substr(7);
		}
		if(tmp.length > 13){
			tmp = tmp.substring(0, 13);
		}
		return tmp;
	}
	return str; 
}

function getURLParam (strParamName){
	var strReturn = "";
	var strHref = window.location.href;
	var bFound=false;
	var cmpstring = strParamName + "=";
	var cmplen = cmpstring.length;
	if ( strHref.indexOf("?") > -1 ){
		var strQueryString = strHref.substr(strHref.indexOf("?")+1);
		var aQueryString = strQueryString.split("&");
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
			if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
				var aParam = aQueryString[iParam].split("=");
				strReturn = aParam[1];
				bFound=true;
				break;
			}
		}
	}
	if (bFound==false) return null;
	return strReturn;
}

//쿠키 입력
function set_cookie(name, value, expirehours, domain)
{
    var today = new Date();
    today.setTime(today.getTime() + (60*60*1000*expirehours));
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
    if (domain) {
        document.cookie += " domain=" + domain + ";";
    }
}

// 쿠키 얻음
function get_cookie(name)
{
    var find_sw = false;
    var start, end;
    var i = 0;

    for (i=0; i<= document.cookie.length; i++)
    {
        start = i;
        end = start + name.length;

        if(document.cookie.substring(start, end) == name)
        {
            find_sw = true
            break
        }
    }

    if (find_sw == true)
    {
        start = end + 1;
        end = document.cookie.indexOf(";", start);

        if(end < start)
            end = document.cookie.length;

        return document.cookie.substring(start, end);
    }
    return "";
}

// 쿠키 지움
function delete_cookie(name)
{
    var today = new Date();

    today.setTime(today.getTime() - 1);
    var value = get_cookie(name);
    if(value != "")
        document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
}


function checkPreviewFileType(fileName){ 
	pathpoint = fileName.lastIndexOf('.'); 
	filepoint = fileName.substring(pathpoint+1,fileName.length); 
	filetype = filepoint.toLowerCase(); 
	if (filetype == 'doc'
		|| filetype == 'docx' 
		|| filetype == 'hwp'
		|| filetype == 'xls'
		|| filetype == 'xlsx'
		|| filetype == 'pdf'
		|| filetype == 'ppt'
		|| filetype == 'pptx'){
       return true; 
	}else{
      return false; 
	} 
}

function capsLock(e) {
	kc = e.keyCode?e.keyCode:e.which;
	 sk = e.shiftKey?e.shiftKey:((kc == 16)?true:false);
	 if(((kc >= 65 && kc <= 90) && !sk)||((kc >= 97 && kc <= 122) && sk)){
		 showCapsLock(); 
	 }else{
		 hideCapsLock();
	 }
}

function showCapsLock() {
    $("#capslock").show();
}

function hideCapsLock() {
    $("#capslock").hide();
}