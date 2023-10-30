describe("Visit homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "example",
    }).as("HomePage");
    cy.visit("http://localhost:3000/");
  });

  it("should display homepage with tricks", () => {
    cy.wait("@HomePage").then((interception) => {
      cy.get("h1")
        .contains("Sick Trick Wish List")
        .get(".card")
        .first()
        .contains("p", "regular treflip")
        .get(".card")
        .first()
        .contains("p", "Obstacle: flat ground")
        .get(".card")
        .first()
        .contains("p", "Link to tutorial:")
        .get(".card")
        .first()
        .contains("a", "https://www.youtube.com/watch?v=XGw3YkQmNig")
        .get(".card")
        .last()
        .contains("p", "frontside 50-50, backside 180 out")
        .get(".card")
        .last()
        .contains("p", "Obstacle: ledge")
        .get(".card")
        .last()
        .contains("p", "Link to tutorial")
        .get(".card")
        .last()
        .contains("a", "https://www.youtube.com/watch?v=9N9swrZU1HA")
        .get(".trick-container")
        .children()
        .should("have.length", 3)
        .get("form > :nth-child(1)")
        .select("Regular")
        .should("have.value", "Regular")
        .get("form > :nth-child(3)")
        .select("FlatGround")
        .should("have.value", "FlatGround")
        .get('[placeholder="Name of Trick"]')
        .should("have.attr", "placeholder", "Name of Trick")
        .type("Testing trick to see if it works!")
        .get('[placeholder="Link to Tutorial"]')
        .should("have.attr", "placeholder", "Link to Tutorial")
        .type("www.test.com")
        .get("button")
        .click()
        .get(".card")
        .last()
        .contains("p", "Regular Testing trick to see if it works!")
        .get(".card")
        .last()
        .contains("a", "www.test.com")
        .get(".trick-container")
        .children()
        .should("have.length", 4);
    });
  });
});
