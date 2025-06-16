import Component from "./Component";

class Page extends Component{
   
    constructor(){
        super(() => cy.get('body'));
        this.url = '';
    }
    visitPage() {
        return cy.visit(this.getUrl());
    }

    setUrl(url) {
        this.url = url;
        return this;
    }

    getUrl() {
        return this.url;
    }

    verifyUrl() {
        return cy.url().should('include', this.getUrl());
    }
   
}

export default Page;