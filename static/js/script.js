var uiController = (function () {
    var DOMstrings = {
        inputColor: ".add__color",
        inputRow: ".add__row",
        inputColumn: ".add__column",
        addBtn: ".add__btn",
    };
    return {
        getInput: function () {
            (function () {
                alert("Picked");
            })();
            return {
                row: document.querySelector(DOMstrings.inputRow).value,
                colomn: document.querySelector(DOMstrings.inputColumn).value,
                color: document.querySelector(DOMstrings.inputColor).value,
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        },

        clearFields: function () {
            alert("Cleared Fields");
            var fields = document.querySelectorAll(
                DOMstrings.inputColor + ", " + DOMstrings.inputRow + ", " + DOMstrings.inputColumn
            );
            var fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (el) {
                el.value = "";
            });
            fieldsArr[0].focus();
            for (var i = 0; i < fieldsArr.length; i++) {
                console.log(fieldsArr[i]);
                fieldsArr[i].value = "";
            }
        },
        buildBottoms: function () {
            for (var i = 1; i <= 10; i++) {
                for (var j = 1; j <= 10; j++) {
                    var html;
                    html = '<button id="#id#" style="border-color:blue; color:black" type="button">Click Me!</button>'
                    var idname = 'btm_' + i + "_" + j;
                    html = html.replace("#id#", idname);
                    console.log(html);
                    document.body.insertAdjacentHTML("beforebegin", html);
                }
                document.body.insertAdjacentHTML("beforebegin", '<br>');
            }
        }
    };
})();

var appController = (function (uiController) {
    var ctrlAddItem = function () {
        var input = uiController.getInput();

        if (input.color !== "" && input.row !== "" && input.column !== "") {
            var elem = document.getElementById('btm_' + input.row + "_" + input.colomn);
            elem.style.color = input.color;
            // elem.style.background-color = input.color;
            uiController.clearFields();
        }
    };

    var setupEventListeners = function () {
        var DOM = uiController.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener("click", function () {
            ctrlAddItem();
        });

        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    return {
        init: function () {
            alert("Started");
            console.log("Application started...");
            uiController.buildBottoms();
            setupEventListeners();
        }
    };
})(uiController);

appController.init();