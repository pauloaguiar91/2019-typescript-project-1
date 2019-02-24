"use strict";
/*
    Paulo Aguair - 2019
 */
var Main = /** @class */ (function () {
    function Main() {
        this.buttonLock = false;
        this.contactFormToggleButton = document.getElementById('contact-button');
        this.contactFormContainer = document.getElementById('contact-form-container');
        this.setupEvents();
    }
    Main.prototype.setupEvents = function () {
        var _this = this;
        this.contactFormToggleButton.onclick = function () {
            _this.contactFormContainer.classList.toggle('open');
        };
        document.getElementsByTagName('body')[0].onclick = function () {
            if (_this.contactFormContainer.classList.contains('open')) {
                // this.contactFormContainer.classList.toggle('open');
            }
        };
    };
    return Main;
}());
new Main();
