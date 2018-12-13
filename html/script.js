var documentWidth = document.documentElement.clientWidth;
var documentHeight = document.documentElement.clientHeight;

var cursor = document.getElementById("cursor");
var cursorX = documentWidth / 2;
var cursorY = documentHeight / 2;

function UpdateCursorPos() {
    cursor.style.left = cursorX;
    cursor.style.top = cursorY;
}

function Click(x, y) {
    var element = $(document.elementFromPoint(x, y));
    element.focus().click();
}

function round(value, precision) {
    if (Number.isInteger(precision)) {
      var shift = Math.pow(10, precision);
      return Math.round(value * shift) / shift;
    } else {
      return Math.round(value);
    }
  } 

$(function() {
    window.addEventListener('message', function(event) {
        if (event.data.type == "enableui") {
            cursor.style.display = event.data.enable ? "block" : "none";
            document.body.style.display = event.data.enable ? "block" : "none";
            var stamina_elem = document.getElementById("staminaBar"); 
            var stamina_elem_info = document.getElementById("staminaInfo"); 
            var strength_elem = document.getElementById("strengthBar"); 
            var strength_elem_info = document.getElementById("strengthInfo"); 
            var shooting_elem = document.getElementById("shootingBar"); 
            var shooting_elem_info = document.getElementById("shootingInfo"); 
            var driving_elem = document.getElementById("drivingBar"); 
            var driving_elem_info = document.getElementById("drivingInfo"); 
            var fishing_elem = document.getElementById("fishingBar"); 
            var fishing_elem_info = document.getElementById("fishingInfo"); 
            var drugs_elem = document.getElementById("drugsBar"); 
            var drugs_elem_info = document.getElementById("drugsInfo"); 
            var width = 10;
            var id = setInterval(staminaFrame, 10);
            var id2 = setInterval(strengthFrame, 10);
            var id3 = setInterval(shootingFrame, 10);
            var id4 = setInterval(drivingFrame, 10);
            var id5 = setInterval(fishingFrame, 10);
            var id6 = setInterval(drugsFrame, 10);
            function drivingFrame() {
                if (width >= event.data.driving) {
                    clearInterval(id4);
                    driving_elem_info.innerHTML = round(event.data.driving, 2) + '%';
                } else {
                    width++; 
                    driving_elem.style.width = width + '%'; 
                    driving_elem_info.value = width + '%';
                }
            }
            function shootingFrame() {
                if (width >= event.data.shooting) {
                    clearInterval(id3);
                    shooting_elem_info.innerHTML = round(event.data.shooting, 2) + '%';
                } else {
                    width++; 
                    shooting_elem.style.width = width + '%'; 
                    shooting_elem_info.value = width + '%';
                }
            }
            function staminaFrame() {
                if (width >= event.data.stamina) {
                    clearInterval(id);
                    stamina_elem_info.innerHTML = round(event.data.stamina, 2) + '%';
                } else {
                    width++; 
                    stamina_elem.style.width = width + '%'; 
                    stamina_elem_info.value = width + '%';
                }
            }
            function strengthFrame() {
                if (width >= event.data.strength) {
                    clearInterval(id2);
                    strength_elem_info.innerHTML = round(event.data.strength, 2) + '%';
                } else {
                    width++; 
                    strength_elem.style.width = width + '%'; 
                    strength_elem_info.value = width + '%';
                }
            }
            function fishingFrame() {
                if (width >= event.data.fishing) {
                    clearInterval(id2);
                    fishing_elem_info.innerHTML = round(event.data.fishing, 2) + '%';
                } else {
                    width++; 
                    fishing_elem.style.width = width + '%'; 
                    fishing_elem_info.value = width + '%';
                }
            }
            function drugsFrame() {
                if (width >= event.data.drugs) {
                    clearInterval(id2);
                    drugs_elem_info.innerHTML = round(event.data.drugs, 2) + '%';
                } else {
                    width++; 
                    drugs_elem.style.width = width + '%'; 
                    drugs_elem_info.value = width + '%';
                }
            }
        } else if (event.data.type == "click") {
            // Avoid clicking the cursor itself, click 1px to the top/left;
            Click(cursorX - 1, cursorY - 1);
        }
    });

    $(document).mousemove(function(event) {
        cursorX = event.pageX;
        cursorY = event.pageY;
        UpdateCursorPos();
    });

    document.onkeyup = function (data) {
        if (data.which == 27) { // Escape key
            $.post('http://stadus_skills/escape', JSON.stringify({}));
        }
    };
});
