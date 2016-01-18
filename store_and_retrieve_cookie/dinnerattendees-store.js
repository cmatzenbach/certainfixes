// Execute when all HTML has been loaded on page
(function ($) {

// Create new object and all properties; set all properties to 0 for now
attendees = {
       fn1:0,
       ln1:0,
       e1:0,
       fn2:0,
       ln2:0,
       e2:0,
       fn3:0,
       ln3:0,
       e3:0,
       fn4:0,
       ln4:0,
       e4:0,
       fn5:0,
       ln5:0,
       e5:0
};


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
var x = getCookie("cookienameMain");
var dataArray = x.split(",");

var questionsArray = [
'reg_ans_field04',
'reg_ans_field05',
'reg_ans_field06',
'reg_ans_field07',
'reg_ans_field08',
'reg_ans_field09',
'reg_ans_field10',
'reg_ans_field11',
'reg_ans_field13',
'reg_ans_field12',
'reg_ans_field14',
'reg_ans_field15',
'reg_ans_field16',
'reg_ans_field17',
'reg_ans_field18'
];

var j = 0;

for (i=0; i < dataArray.length; i++) {
document.getElementById(questionsArray[j]).value = dataArray[i];
j++;
}

$('form').submit(function() { 

            // Get all entered attendee data
            if(document.getElementById("reg_ans_field04")) { attendees.fn1 = document.getElementById("reg_ans_field04").value; }
            if(document.getElementById("reg_ans_field05")) { attendees.ln1 = document.getElementById("reg_ans_field05").value; }
            if(document.getElementById("reg_ans_field06")) { attendees.e1 = document.getElementById("reg_ans_field06").value; }
            if(document.getElementById("reg_ans_field07")) { attendees.fn2 = document.getElementById("reg_ans_field07").value; }
            if(document.getElementById("reg_ans_field08")) { attendees.ln2 = document.getElementById("reg_ans_field08").value; }
            if(document.getElementById("reg_ans_field09")) { attendees.e2 = document.getElementById("reg_ans_field09").value; }
            if(document.getElementById("reg_ans_field10")) { attendees.fn3 = document.getElementById("reg_ans_field10").value; }
            if(document.getElementById("reg_ans_field11")) { attendees.ln3 = document.getElementById("reg_ans_field11").value; }
            if(document.getElementById("reg_ans_field13")) { attendees.e3 = document.getElementById("reg_ans_field13").value; }
            if(document.getElementById("reg_ans_field12")) { attendees.fn4 = document.getElementById("reg_ans_field12").value; }
            if(document.getElementById("reg_ans_field14")) { attendees.ln4 = document.getElementById("reg_ans_field14").value; }
            if(document.getElementById("reg_ans_field15")) { attendees.e4 = document.getElementById("reg_ans_field15").value; }
            if(document.getElementById("reg_ans_field16")) { attendees.fn5 = document.getElementById("reg_ans_field16").value; }
            if(document.getElementById("reg_ans_field17")) { attendees.ln5 = document.getElementById("reg_ans_field17").value; }
            if(document.getElementById("reg_ans_field18")) { attendees.e5 = document.getElementById("reg_ans_field18").value; }

            enteredAttendees = [];  // create new array to store entered (non-zero) data for cookie
            i = 0;
            for (var prop in attendees) {
                 if (attendees[prop] !== 0) {
                      enteredAttendees[i] = attendees[prop];
                      i++;
                 }
            }


            // Store multiple values in same cookie
            var attdata = enteredAttendees.join(',');
            document.cookie = "cookiename" + "=" + attdata;

});

}(jQuery));
