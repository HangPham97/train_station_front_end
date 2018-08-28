/*
* @Author: ngoc trung
* @Date:   2017-09-25 22:15:56
* @Last Modified by:   ngoc trung
* @Last Modified time: 2017-09-25 22:19:24
*/
function refresh(){
	var from = document.getElementById('home-from').value;
	var to = document.getElementById('home-to').value;
	document.getElementById('home-from').value =to;
	document.getElementById('home-to').value =from;
}