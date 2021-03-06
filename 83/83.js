var pcs = pcs || {};

pcs.tools = (function () {
    "use strict";
    var display;
    function get(id) {
        return document.getElementById(id);
    }

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    function click(elem, theFunction) {
        elem.addEventListener("click", theFunction);
    }
    function hide(elem) {
        // var display = window.getComputedStyle(elem);
        display = window.getComputedStyle(elem).getPropertyValue("display");
        elem.style.display = "none";
    }
    function show(elem) {
        elem.style.display = display;
    }



    return {
        wrap: function (id) {
            var elem = get(id);

            return {
                setCss: function (property, value) {
                    setCss(elem, property, value);
                    return this;
                },
                pulsate: function () {
                    var fontSize = 32,
                        i = 1,
                        //that = this,
                        interval = setInterval(function () {
                            if (i <= 5 || i > 15) {
                                fontSize += 5;
                            } else {
                                fontSize -= 5;
                            }

                            //that.setCss("fontSize", fontSize + 'px');
                            setCss(elem, "fontSize", fontSize + 'px');

                            if (i++ === 20) {
                                clearInterval(interval);
                            }
                        }, 100);

                    return this;
                },
                click: function (theFunction) {
                    click(elem, theFunction);
                    return this;
                },
                hide: function () {
                    hide(elem);
                    return this;
                },
                show: function () {
                    show(elem);
                    return this;
                }


            };
        }
    };

}());