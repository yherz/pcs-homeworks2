var pcs = pcs || {};

pcs.tools = (function () {
    "use strict";
    var display;
    var data;
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
                    if (arguments.length === 2) {
                        setCss(elem, property, value);
                        return this;
                    }
                    else
                        return window.getComputedStyle(elem).getPropertyValue(property);

                },
                pulsate: function () {
                    var fontSize = window.getComputedStyle(elem).getPropertyValue('font-size');
                    console.log(fontSize);
                    var thenum = parseInt(fontSize);
                    var i = 1;

                    var interval = setInterval(function () {
                        if (i <= 5 || i > 15) {
                            thenum += 5;
                        } else {
                            thenum -= 5;
                        }

                        //that.setCss("fontSize", fontSize + 'px');
                        setCss(elem, "fontSize", thenum + 'px');

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
                },
                setData: function (theData) {
                    data = theData;
                    return this;
                },
                getData: function () {
                    return data;
                }


            };
        }
    };

}());