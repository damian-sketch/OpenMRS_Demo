import Row from "../components/Row";
import Section from "../components/Section";
import Text from "../components/Text";
import Page from "../core/Page";

class HomePage extends Page {
    constructor(){
        super();
        this.setUrl('/')
    }

    getHomePageText(){
        return this.componentFactory(Text, 'p:contains("Home")')
    }

    getVisitMetricsSection(){
        return this.componentFactory(Section, '[data-extension-id="metrics-slot"]')
    }

    getActiveVisitsWidget(){
        return this.componentFactory(Section, '[data-extension-id="active-visits-widget"]')
    }

    getTodaysAppointmentsWidget() {
        return this.componentFactory(Section, '[data-extension-id="home-appointments"]')
    }

    getNavigationBar(){
        return this.componentFactory(Row, '[aria-label="OpenMRS"]')
    }
}

export default HomePage;