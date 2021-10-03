//INSPECTORS
var eventit = false; //check if the button is clicked after load or not
var series = []; //storage of the series

//STATISTICS VARiables
var catcall = ""; //help in snatch the catalog's content [litteraly, "content"! 😒]
var sr = 1;
var ismade;
var supari;
var was_delete;
var variant_proto; //This variable will contain the Colour expected to occur in the Series
var variant; //This will contain the value of "variant_proto", in an uppercase(Capitalized) FORMAT [Don't take it for being Lame, every Code on the Glasses will be CAPITALIZED]
var gotit; //Check if the [OK] Button is clicked for the Alarm
var ispassed; //Will contain the parameter that, "if the glass is passed or not - yes/no"
var bodied = false; //Check if the <tbody> WAS LANDED to <table> or not

//TABLE BUILDER [are tables also built by any kinda builder ?🤨]; // Store the elements in variables and join them to create an innerHTML from that combination
var mange = 0;
var tblHead;
var tblBody;
var headrow;
var row;
var headcell1;
var headcell2;
var headcell3;
var headcell4;
var headcell5;
var cell1;
var cell2;
var cell3;
var cell4;
var cell5;
var uniteHead;
var uniteBody;
var uniteBoth;
var generator;

//CREATE THE SELECT
let bodygo = document.getElementById("contenter");
let gimme_cam;

//TABLE Operators
//SH*T!! - hook in last hours, while killing the design [highly CONTAGIOUS! 👿]
var gravity = document.getElementsByTagName("body")[0]; // [real heck 🤬], it would bring the identity of the body tag
var bodyback = document.getElementById("table_contenter");
var tranceimg = "pause";

//Audio sources
var startplease = document.getElementById("please");
var passedyes = document.getElementById("in");
var passedno = document.getElementById("out");
var reloader = document.getElementById("re_source");

//work when the page loads
function setting() {
    bodyback.innerHTML = "<table id='glass_data'></table>"; //create the table
    evenit = false;
    //HELL-LANDED [HIGHLY CONTAGIOUS, for Reals : "right now"]
    // Use this after the generatetable(); is made already ; the HTML is not recognizing it, as it is not being made yet [the 'butt' button]
    //const export_button = document.getElementById('butt');export_button.addEventListener('click', () => {html_table_to_excel('xlsx');});
}

//make 'em, lemme me push the button 🙄
function record_tap() {
    var anime = document.getElementById("record_photo");

    if (eventit == false) {
        console.log("conditioned");
        variant_proto = prompt("Please,\nEnter the Intended Variant...");
        if (variant_proto == "" || variant_proto == " ") {
            eventit = false;
        } else {
            variant = variant_proto.toUpperCase();
            console.log("Variant: " + variant);
            ismade = false;
            supari = false;
            headup();
            anime.src = "record button - switch (pause - play).gif";
            setTimeout(function() {
                anime.src = "record button - play.gif";
            }, 500);
            eventit = true;
        }
    } else if (eventit == true) {
        console.log("unconditioned");
        eventit = false;
        terminator();
        anime.src = "record button - switch (play - pause).gif";
        setTimeout(function() {
            anime.src = "record button - pause.gif";
        }, 500);
    }
}


//initialize the thing
let scanner = new Instascan.Scanner({
    video: document.getElementById('preview'),
    mirror: true
});

scanner.addListener('scan', function(content) {
    console.log(content);
    if (eventit == true) {
        catcall = content;
        series.push(content);
        console.log(series);
        if (content != variant) {
            buzzer(11000, content);
            ispassed = "No";
        } else if (content == variant) {
            ispassed = "Yes";
            passedyes.play();
            alert(content);
        }
        document.getElementById("yesbody").style.overflow = "scroll";
        generatetable();
        if (bodied == false) {
            yourbody();
        }
        push_to_body();
        sr++;
    } else if (eventit == false) {
        startplease.play();
        alert("Please, start the scanning series!" + "\n" + "\n" + "However, VARIANT = " + content);
        console.log("hell! 😡 😑 👿");
    }
});

Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
        scanner.activeCameraId = cameras[0].id;
        scanner.start(cameras[0]);
        gimme_cam = cameras;
        console.log(gimme_cam);
        for (let index = 0; index <= cameras.length; index++) {
            if (index == 0) {
                bodygo.innerHTML = "<option id='0'>" + cameras[0].name + "</option>";
            } else if (index > 0) {
                var previouscontent = bodygo.innerHTML;
                bodygo.innerHTML = previouscontent + "<option id='" + index + "'>" + cameras[index].name + "</option>";
            }
        }
    } else {
        alert("Sorry, No Cameras were Found");
        console.error('No cameras found.');
        bodyback.innerHTML = "<option id='error_class'>No Cameras Found</option>";
    }
}).catch(function(e) {
    console.error(e);
});

//Let the User select their intended camera
function logSELECT(select) {
    var ids = select[select.selectedIndex].id; // get id
    var thugit = gimme_cam[ids];
    scanner.activeCameraId = thugit;
    scanner.start(thugit);
    console.log(ids);
}

//ALL THE FUNCTIONS [on the DECK]
function yourbody() {
    tblBody = "<tbody id='belly'>" + row + "\n" + " </tbody>"; //create the table body
}

function headup() {
    //CREATE the 1st heading - "S. No"
    var head_1 = "<td id='shorten'>S. No</td>";
    headcell1 = head_1;

    //CREATE the 2nd heading - "GLASS Name"
    var head_2 = "<td id='camel'>GLASS Name</td>";
    headcell2 = head_2;

    //CREATE the 3rd heading - "Result (isPassed)"
    var head_3 = "<td id='camel'>Result [Is Passed?]</td>";
    headcell3 = head_3;

    //CREATE the 4th heading - "Time"
    var head_4 = "<td id='camel'>Time</td>";
    headcell4 = head_4;

    //CREATE the 5th heading - "Date"
    var head_5 = "<td id='camel'>Date</td>";
    headcell5 = head_5;

    // Unite all the cells in var "uniteHead"
    uniteHead = headcell1 + headcell2 + headcell3 + headcell4 + headcell5;

    //tHead & tr - will process to the "<table>"
    headrow = "<tr id='stand_right'>" + uniteHead + "</tr>";
    tblHead = "<thead id='forer'>" + headrow + "</thead>"; //create the table head

    //GENERATE REPORT - Button [prevent another button from created];
    if (ismade == false) {
        generator = "<br><button id='butt' onclick='html_table_to_excel();' class='button'><span class='button__text'>GENERATE REPORT</span><span class='button__icon'><i class='fad fa-file-download'></i></span></button>";

        ismade = true;
    }
}

function generatetable() {
    //HIGHLY CONTAGIOUS !!!!!!!!!!!!!!
    //make_tribute();

    //variables

    //if (supari == true) {hours = "";minutes = "";sec = "";ease = "";date = "";} else 
    if (supari == false) {

        //TIME:AND.DATE
        var ease = new Date(); //ease with roots of variables 😁
        var date = ease.getDate() + '-' + (ease.getMonth() + 1) + '-' + ease.getFullYear();

        //Call the time in 24-hour :FORMAT:
        //var time = ease.getHours() + ":" + ease.getMinutes() + "." + ease.getSeconds();

        //Call the time in 12-hour :FORMAT: [along with 'PM' & 'AM']
        var hours = ease.getHours();
        var minutes = ease.getMinutes();
        var sec = ease.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if (sec <= 9) {
            sec = "0" + sec;
        }
        var time12 = hours + ':' + minutes + "." + sec + ' ' + ampm;
    }

    //check if the button is clicked or not
    if (eventit == true) {

        //Give custom id with this "Mangy_Dog! 😎"
        mange++;

        //first column, with the serial number
        var cell_1 = "<td id='shorten'>" + sr + ".</td>";
        cell1 = cell_1;

        //second column, with the "content" number
        var cell_2 = "<td id='camel'>" + catcall + "</td>";
        cell2 = cell_2;

        //third column, with the value of passed as "yes/no"
        var cell_3 = "<td id='camel'>" + ispassed + "</td>";
        cell3 = cell_3;

        //fourth column, with the time at which the glass was scanned
        var cell_4 = "<td id='camel'>" + time12 + "</td>";
        cell4 = cell_4;

        //fifth column, with the date at which the glass was scanned
        var cell_5 = "<td id='camel'>" + date + "</td>";
        cell5 = cell_5;

        // Unite all the data_cells in var "uniteBody"
        uniteBody = cell1 + cell2 + cell3 + cell4 + cell5;

        //increament the "ID"
        var idle = "sleep_well_";
        var sleeper = idle.concat(mange);
        console.log(sleeper);

        // Selected for the planet "<table>"
        row = "<tr id='" + sleeper + "'>" + uniteBody + "</tr>";
        //Stuff the table with all the CELLS
        //tblBody.appendChild(row);
        //tbl.appendChild(tblBody);
    }
}

function push_to_body() {
    uniteBoth = tblHead + "\n" + tblBody;
    if (bodied == false) {
        document.getElementById("glass_data").innerHTML = uniteBoth; //all united
        var previouscontent = bodyback.innerHTML; //don't loose the table contents
        bodyback.innerHTML = previouscontent + generator; //fix the button
        bodied = true;
    } else if (bodied == true) {
        if (mange > 1) {
            var stomach = document.getElementById("belly");
            var previouscontent = stomach.innerHTML;
            console.log(previouscontent);
            stomach.innerHTML = previouscontent + row;
        } else if (mange <= 1) {
            //ONCE Again, but after it was deleted once 😅
            document.getElementById("glass_data").innerHTML = uniteBoth; //all united
            var previouscontent = bodyback.innerHTML; //don't loose the table contents
            bodyback.innerHTML = previouscontent + generator; //fix the button
        }
    }
}
//SERIES ["BEEP" function, {now buzzer()😓}] go
function buzzer(ms, need) {

    passedno.play();
    navigator.vibrate(ms);

    window.alert = function(al, $) {
        return function(msg) {
            al(msg);
            $(window).trigger("okbuttonclicked");
        };
    }(window.alert, window.jQuery);



    $(window).on("okbuttonclicked", function() {
        passedno.pause();
        reloader.src = "assets/Audio/StartPlease!.mp3";
        passedno.load();
    });

    alert("Oops!\nThe Glass doesn't match the expected Variant-type...\n\nHowever, VARIANT = " + need);
}

//GENERATE REPORT 😎
//function html_table_to_excel(type) {var data = document.getElementsByTagName("table")[0];var file = XLSX.utils.table_to_book(data, { sheet: "sheet1" });XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });XLSX.writeFile(file, 'file.' + type);}

function html_table_to_excel() {
    var filename = prompt("Please,\nName The Spreadsheat [Excel Report]");
    var finalfn = filename + ".xls";
    $("#glass_data").table2excel({
        filename: finalfn
    });
    //const table2Excel = new Table2Excel('table', {  filename: finalfn,plugins: [Table2Excel.plugins.fontPlugin]}).export();
}

function generate(tableID) {
    var downLink;
    var dataType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

    filename = "Report.xls"; //ask to Papa, that how will the employees want it to be named [or provide the user with an input, and then name the file]
    var downLink = document.createElement("a");
    document.body.appendChild(downLink);

    if (navigator.mySaveOrOpenBlob) {
        var blob = new Blob(["\ufeff", 'tableHTML'], { type: dataType });
        navigator.mySaveOrOpenBlob(blob, filename);
    } else {
        downLink.href = 'data' + dataType + 'a' + tableHTML;
        downLink.download = filename;
        downLink.click;
    }
}

function terminator() {
    if (catcall != "") {
        var idle = "sleep_well_";
        var checker = []; //kill later
        var lazy;
        var button_to_delete = document.getElementById("butt");
        var mund = document.getElementById("forer");
        var tond = document.getElementById("belly");
        button_to_delete.remove();
        mund.parentNode.removeChild(mund);
        tond.parentNode.removeChild(tond);
        for (var i = 0; i <= mange; i++) {
            var sleeper = idle.concat(i);
            checker.push(sleeper);
            lazy = document.getElementById(sleeper);
            $(lazy).remove();
        }
        document.getElementById("yesbody").style.overflow = "hidden";
        sr = 1;
        catcall = "";
        supari = true;
        was_delete = true;
        bodied = false;
        put_in = false;
        mange = 0;
        console.log(checker);
    }
}


//////////////////I would have used this to get rid of the wicked scroll [da heck, U CANT TOUCH THIS!; "highly contagious 😈"]/////////////
//function make_tribute() {  gravity.setAttribute("id", "nobody");}croll [da heck, U CANT TOUCH THIS!; "highly contagious 😈"]/////////////
//function make_tribute() {  gravity.setAttribute("id", "nobody");}