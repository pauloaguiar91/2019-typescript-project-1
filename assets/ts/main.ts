/*
    Paulo Aguair - 2019
*/

class Main {
    private buttonLock: boolean;
    private contactFormToggleButton: HTMLElement;
    private contactFormContainer: HTMLElement;
    private contactLabel: HTMLElement;
    private paginationContainer: HTMLElement;
    private pagItems: HTMLCollectionOf<Element>;

    constructor() {
        this.buttonLock = false;
        this.contactFormToggleButton = <HTMLElement>document.getElementById('contact-button');
        this.contactFormContainer = <HTMLElement>document.getElementById('contact-form-container');
        this.contactLabel = <HTMLElement>document.getElementById('contact-label');
        this.paginationContainer = <HTMLElement>document.getElementById('pagination-container');
        this.pagItems = document.getElementsByClassName('pag-item');

        this.generatePaginationContent(() => {
            this.scrollEventHandler();
            this.setupEvents();
        });
    }

    private setupEvents(): void {
        this.contactFormToggleButton.onmouseenter = () => {
            if (!this.contactFormContainer.classList.contains('open')) {
                this.contactLabel.classList.add('shown');
            }
        };

        this.contactFormToggleButton.onmouseleave = () => {
            if (!this.contactFormContainer.classList.contains('open')) {
                this.contactLabel.classList.remove('shown');
            }
        };

        this.contactFormToggleButton.onclick = () => {
            this.contactFormContainer.classList.toggle('open');
        };

        document.getElementsByTagName('body')[0].onclick = () => {
            if (this.contactFormContainer.classList.contains('open')) {

            }
        };

        for (let i = 0; i < this.pagItems.length; i ++) {
            this.pagItems[i].addEventListener('click', this.pagItemClicked);
        }

        window.onscroll = this.scrollEventHandler;
    }

    private pagItemClicked(event: any): void {
        const button = event.target;
        const allPagItems = document.getElementsByClassName('pag-item');
        const mainViewHeight = document.getElementsByClassName('main-area')[0].getBoundingClientRect().height;

        if (this.buttonLock || button.classList.contains('active')) {
            return;
        }

        this.buttonLock = true;

        for (let i = 0; i < allPagItems.length ; i++) {
            document.getElementsByClassName('pag-item')[i].classList.remove('active');

        }
        window.scrollTo(0, mainViewHeight * parseInt(button.getAttribute('data-number')) + 5);
        this.buttonLock = false;
    }

    private generatePaginationContent(callback: any): void {
        const amountOfViews = document.getElementsByClassName('main-area').length;

        for (let i = 0; i < amountOfViews; i++) {
            const listItem = "<li class='pag-item' data-number='" + i + "'></li>";
            this.paginationContainer.innerHTML += listItem;
        }

        if (typeof callback == 'function') {
            callback();
        }
    }

    private scrollEventHandler(): void {
        const scrollPos = window.pageYOffset;
        const heightOfView = document.getElementsByClassName('main-area')[0].getBoundingClientRect().height;
        const whichIsShown = Math.floor(scrollPos / heightOfView);
        const paginationElement = document.getElementsByClassName('pag-item')[whichIsShown];
        const allPagItems = document.getElementsByClassName('pag-item');

        for (let i = 0; i < allPagItems.length ; i++) {
            document.getElementsByClassName('pag-item')[i].classList.remove('active');
        }

        paginationElement.classList.add('active');
    }
}

new Main();
