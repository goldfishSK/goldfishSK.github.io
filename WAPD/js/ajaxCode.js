alert("文档加载成功");
function getCode(){
 var setName=	localStorage.setName;
 qrcode.makeCode('http://www.quanmingwang.com/');
 alert('可以进行跳转');
}
getCode();