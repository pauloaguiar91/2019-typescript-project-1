"use strict";
/*
    Paulo Aguair - 2019
*/
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.buttonLock = false;
        this.contactFormToggleButton = document.getElementById('contact-button');
        this.contactFormContainer = document.getElementById('contact-form-container');
        this.contactLabel = document.getElementById('contact-label');
        this.paginationContainer = document.getElementById('pagination-container');
        this.pagItems = document.getElementsByClassName('pag-item');
        this.generatePaginationContent(function () {
            _this.scrollEventHandler();
            _this.setupEvents();
        });
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
            }
        };
        for (var i = 0; i < this.pagItems.length; i++) {
            this.pagItems[i].addEventListener('click', this.pagItemClicked);
        }
        window.onscroll = this.scrollEventHandler;
    };
    Main.prototype.pagItemClicked = function (event) {
        var button = event.target;
        var allPagItems = document.getElementsByClassName('pag-item');
        var mainViewHeight = document.getElementsByClassName('main-area')[0].getBoundingClientRect().height;
        if (this.buttonLock || button.classList.contains('active')) {
            return;
        }
        this.buttonLock = true;
        for (var i = 0; i < allPagItems.length; i++) {
            document.getElementsByClassName('pag-item')[i].classList.remove('active');
        }
        window.scrollTo(0, mainViewHeight * parseInt(button.getAttribute('data-number')) + 5);
        this.buttonLock = false;
    };
    Main.prototype.generatePaginationContent = function (callback) {
        var amountOfViews = document.getElementsByClassName('main-area').length;
        for (var i = 0; i < amountOfViews; i++) {
            var listItem = "<li class='pag-item' data-number='" + i + "'></li>";
            this.paginationContainer.innerHTML += listItem;
        }
        if (typeof callback == 'function') {
            callback();
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
