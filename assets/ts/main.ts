/*
    Paulo Aguair - 2019
 */

class Main {
    private buttonLock: boolean;
    private contactFormToggleButton: HTMLElement;
    private contactFormContainer: HTMLElement;

    constructor() {
        this.buttonLock = false;
        this.contactFormToggleButton = <HTMLElement>document.getElementById('contact-button');
        this.contactFormContainer = <HTMLElement>document.getElementById('contact-form-container');
        this.setupEvents();
    }

    private setupEvents(): void {
        this.contactFormToggleButton.onclick = () => {
            this.contactFormContainer.classList.toggle('open');
        };

        document.getElementsByTagName('body')[0].onclick = () => {
            if (this.contactFormContainer.classList.contains('open')) {
                // this.contactFormContainer.classList.toggle('open');
            }
        };
    }
}

new Main();