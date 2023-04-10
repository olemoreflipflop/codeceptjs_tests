const {I} = inject();

module.exports = {
    locators: {
        buttonHomepageLabel: 'Go to Homepage',
    },
    
    visit() {
        I.amOnPage('/history.php#history');
        return this;
    },

    clickBackToHomepage() {
        I.click(this.locators.buttonHomepageLabel, '#history')
        return this;
    }
}