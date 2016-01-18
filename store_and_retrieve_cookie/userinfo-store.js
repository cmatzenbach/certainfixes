// Execute when all HTML has been loaded on page
(function ($) {

// Create new object and all properties; set all properties to 0 for now
mainAttendee = {
       fn1:0,
       ln1:0,
       e1:0,
};

$('form').submit(function() { 

            // Get all entered attendee data
            if(document.getElementById("pro_fname")) { mainAttendee.fn1 = document.getElementById("pro_fname").value; }
            if(document.getElementById("pro_lname")) { mainAttendee.ln1 = document.getElementById("pro_lname").value; }
            if(document.getElementById("pro_email")) { mainAttendee.e1 = document.getElementById("pro_email").value; }

            enteredMainAttendee = [];  // create new array to store entered (non-zero) data for cookie
            i = 0;
            for (var prop in mainAttendee) {
                 if (mainAttendee[prop] !== 0) {
                      enteredMainAttendee[i] = mainAttendee[prop];
                      i++;
                 }
            }


            // Store multiple values in same cookie
            var mainattdata = enteredMainAttendee.join(',');
            document.cookie = "cookienameMain" + "=" + mainattdata;

});

}(jQuery));
