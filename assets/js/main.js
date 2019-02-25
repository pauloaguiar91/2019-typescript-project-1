"use strict";
/*
    Paulo Aguair - 2019
*/
var Main = /** @class */ (function () {
    function Main() {
        this.buttonLock = false;
        this.contactFormToggleButton = document.getElementById('contact-button');
        this.contactFormContainer = document.getElementById('contact-form-container');
        this.contactLabel = document.getElementById('contact-label');
        this.paginationContainer = document.getElementById('pagination-container');
        this.setupEvents();
        this.generatePaginationContent();
    }
    Main.prototype.setupEvents = function () {
        var _this = this;
        this.contactFormToggleButton.onmouseenter = function () {
            if (!_this.contactFormContainer.classList.contains('open')) {
                _this.contactLabel.classList.add('shown');
            }
        };
        this.contactFormToggleButton.onmouseleave = function () {
            if (!_this.contactFormContainer.classList.contains('open')) {
                _this.contactLabel.classList.remove('shown');
            }
        };
        this.contactFormToggleButton.onclick = function () {
            _this.contactFormContainer.classList.toggle('open');
        };
        document.getElementsByTagName('body')[0].onclick = function () {
            if (_this.contactFormContainer.classList.contains('open')) {
                // this.contactFormContainer.classList.toggle('open');
            }
        };
        window.onscroll = this.scrollEventHandler;
    };
    Main.prototype.generatePaginationContent = function () {
        var amountOfViews = document.getElementsByClassName('main-area').length;
        var listItem = "<li class='pag-item'></li>";
        for (var i = 0; i < amountOfViews; i++) {
            this.paginationContainer.innerHTML += listItem;
        }
    };
    Main.prototype.scrollEventHandler = function () {
        var scrollPos = window.pageYOffset;
        var heightOfView = document.getElementsByClassName('main-area')[0].getBoundingClientRect().height;
        var whichIsShown = Math.floor(scrollPos / heightOfView);
        var paginationElement = document.getElementsByClassName('pag-item')[whichIsShown];
        var allPagItems = document.getElementsByClassName('pag-item');
        for (var i = 0; i < allPagItems.length; i++) {
            document.getElementsByClassName('pag-item')[i].classList.remove('active');
        }
        paginationElement.classList.add('active');
    };
    return Main;
}());
new Main();
