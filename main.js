require.config({
　　　　paths: {
　　　　　　"jquery": "jquery-1.11.3.min"
　　　　}
　　});
require(['jquery','math'], function ($,math){
　　　　// some code here
$(".click").on("click",function(){
	
	alert(math.add(25,32));
})
　　});