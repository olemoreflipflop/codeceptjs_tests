const {I} = inject();

module.exports = {
    locators: {
        buttonHomepageText: 'Go to Homepage',
    },
    
    visit() {
        I.amOnPage('/history.php#history');
        return this;
    },

    clickBackToHomepage() {
        I.click(this.locators.buttonHomepageText, '#history')
        return this;
    }
}