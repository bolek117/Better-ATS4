// ==UserScript==
// @name       Better Plan.polsl.pl
// @namespace  https://github.com/bolek117/Better-ATS4
// @version    1.0
// @description  Tampermonkey scripts for better usability of ATS4 system
// @match      https://plan.polsl.pl/plan.php*
// @copyright  2014, bolek117
// ==/UserScript==

var courses = document.getElementsByName("course");

for(c in courses) {
    var elem = courses[c];
    if (elem != undefined && elem.style != undefined) {
        var str = elem.style.backgroundColor;
        str = str.replace("rgb", "rgba");
        str = str.replace(")", ", 0.75)");
		elem.style.backgroundColor = str;
    }
}
