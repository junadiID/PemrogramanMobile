//	Nama	: Junjun Junaedi
//	NIM		: 20190040028
//	Kelas	: Ti19A

function reverse(param){
	var x = param.length, y = '';
	while(x > 0){
		y += param[x - 1];
		x--;
	}
	return y;
}
var word = "Makan";
if(word === reverse(word)){
	console.log("Kata `"+word+"`  Palindrome.");
}
else{
	console.log("Kata `"+word+"`   Bukan Palindrome.");
}
