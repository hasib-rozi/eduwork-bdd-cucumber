const URL = 'https://duckduckgo.com/'
const INPUT = 'input'

class DuckduckgoPage{
    static visit() {
        cy.visit(URL)
    }

    static showInput(input) {
        cy.get(INPUT).should("have.attr", "placeholder", "Search the web without being tracked")
    }
}

export default DuckduckgoPage