let chips = document.getElementsByName('chip');
            chips.forEach(chip => {
                chip.onmousedown = function(e) {
                    var coords = getCoords(chip);
                    var shiftX = e.pageX - coords.left;
                    var shiftY = e.pageY - coords.top;
                    chip.style.position = 'absolute';
                    document.body.appendChild(chip);
                    moveAt(e);
                    chip.style.zIndex = 1000; // над другими элементами
                    function moveAt(e) {
                        chip.style.left = e.pageX - shiftX + 'px';
                        chip.style.top = e.pageY - shiftY + 'px';
                    }
                    document.onmousemove = function(e) {
                      moveAt(e);
                    };
                    chip.onmouseup = function() {
                      document.onmousemove = null;
                      chip.onmouseup = null;
                    };
                  }
                  chip.ondragstart = function() {
                    return false;
                  };
                  function getCoords(elem) {
                    var box = elem.getBoundingClientRect();
                    return {
                      top: box.top + pageYOffset,
                      left: box.left + pageXOffset
                    };
                  }
            });