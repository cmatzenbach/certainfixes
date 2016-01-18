// Execute when all HTML has been loaded on page
(function ($) {

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
var x = getCookie("cookiename");
var dataArray = x.split(",");

var questionsArray = [
'reg_ans_field19',
'reg_ans_field20',
'reg_ans_field21',
'reg_ans_field22',
'reg_ans_field23',
'reg_ans_field24',
'reg_ans_field25',
'reg_ans_field26',
'reg_ans_field27',
'reg_ans_field28',
'reg_ans_field29',
'reg_ans_field30',
'reg_ans_field31',
'reg_ans_field32',
'reg_ans_field33'
];

var j = 0;

for (i=0; i < dataArray.length; i++) {
document.getElementById(questionsArray[j]).value = dataArray[i];
j++;
}

}(jQuery));
