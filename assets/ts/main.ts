/*
    Paulo Aguair - 2019
*/

class Main {
    private buttonLock: boolean;
    private contactFormToggleButton: HTMLElement;
    private contactFormContainer: HTMLElement;
    private contactLabel: HTMLElement;
    private paginationContainer: HTMLElement;

    constructor() {
        this.buttonLock = false;
        this.contactFormToggleButton = <HTMLElement>document.getElementById('contact-button');
        this.contactFormContainer = <HTMLElement>document.getElementById('contact-form-container');
        this.contactLabel = <HTMLElement>document.getElementById('contact-label');
        this.paginationContainer = <HTMLElement>document.getElementById('pagination-container');
        this.setupEvents();
        this.generatePaginationContent();
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
                // this.contactFormContainer.classList.toggle('open');
            }
        };

        window.onscroll = this.scrollEventHandler;
    }

    private generatePaginationContent(): void {
        const amountOfViews = document.getElementsByClassName('main-area').length;
        const listItem = "<li class='pag-item'></li>";

        for (let i = 0; i < amountOfViews; i++) {
            this.paginationContainer.innerHTML += listItem;
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