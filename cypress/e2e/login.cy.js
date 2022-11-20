it.skip("Should successfully login", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it.skip("Should not login with empty login", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type("test");
  cy.contains("Submit").click();
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it.skip("Should not login with empty password", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it.skip("Should adding a book by button", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.get(".p-0 > .btn").click();
  cy.get("#title").type("Война миров");
  cy.get("#description").type("Фантастика");
  cy.get("#authors").type("Айзек Азимов");
  cy.contains("Submit").click();
  cy.contains("Война миров").should("be.visible");
});

it("Should adding a book to favorites", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.get(
    '[href="book/c8147766-4fae-4f4c-8337-0a792e94651c"] > .h-100 > .card-footer > .btn'
  ).click();
  cy.get("h4").click();
  cy.contains("Война миров").should("be.visible");
});

it("Should deleting a book favorites", () => {
  cy.viewport(360, 640);
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.get("h4").click();
  cy.get(".card-footer > .btn").click();
  cy.contains("Please add some book to favorit").should("be.visible");
});
