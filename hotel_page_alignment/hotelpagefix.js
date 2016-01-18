// CMatz's hotel page fix
(function ($) {
$(document).ready(function() {
       if ($("#errorStack")[0]) {    // if user submits and receives certain error
        $("#page-table > tbody > tr:nth-child(6) > td > table:nth-child(1)").css("display", "none");  // remove extra table before special hotel requests
        $("#page-table > tbody > tr:nth-child(6) > td > br").remove();  // remove extra <br> before special hotel requests
        $("#page-table > tbody > tr:nth-child(6) > td > table:nth-child(3)").css("margin-top", "30px");  // adds in some space above table containing special hotel requests
        $("#page-table > tbody > tr:nth-child(6) > td > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(1)").after("<td align=\"center\" valign=\"top\"></td><td align=\"center\" valign=\"top\"></td>"); // adds two tds before "special hotel requests" text field - pushes it over to align with other fields above
        $("#page-table > tbody > tr:nth-child(6) > td > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2)").css("padding-left", "187px");  // moves special hotel requests input box over to align with date choices
        $("#page-table > tbody > tr:nth-child(6) > td > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > textarea").css("margin-top", "-18px");  // eliminates extra space between requests input box and date fields above
} else {   // normal page with no errors, same functioning as above
        $("#page-table > tbody > tr:nth-child(5) > td > table:nth-child(1)").css("display", "none");
        $("#page-table > tbody > tr:nth-child(5) > td > br").remove();
        $("#page-table > tbody > tr:nth-child(5) > td > table:nth-child(3)").css("margin-top", "30px");
        $("#page-table > tbody > tr:nth-child(5) > td > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(1)").after("<td align=\"center\" valign=\"top\"></td><td align=\"center\" valign=\"top\"></td>");
        $("#page-table > tbody > tr:nth-child(5) > td > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2)").css("padding-left", "187px");
        $("#page-table > tbody > tr:nth-child(5) > td > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > textarea").css("margin-top", "-18px");
};
}) 
}(jQuery));
