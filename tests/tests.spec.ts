import { test, expect } from "@playwright/test";
import { ElementsPage } from "../page-objects/ElementsPage";
import { TextBoxPage } from "../page-objects/TextBoxPage";

test("verify that Elements page is opened", async ({ page }) => {
  const elementPage = new ElementsPage(page);
  await elementPage.goto();
  await elementPage.getElementsTitle.isVisible();
});

test("verify text box", async ({ page }) => {
  const textboxPage = new TextBoxPage(page);
  await textboxPage.goto();
  await textboxPage.getTitle.isVisible();
  await textboxPage.getFullNameField.pressSequentially("John Smith");
  await textboxPage.getEmailField.pressSequentially("smith@gmail.com");
  await textboxPage.getCurrentAdressField.pressSequentially(
    "New-York, Grow Street"
  );
  await textboxPage.getPermanentAdressField.pressSequentially(
    "Chikago, Green Street"
  );

  await textboxPage.getSubmitButton.click();
  await textboxPage.getNameOutput.waitFor();

  const nameValue = await textboxPage.getNameOutput.textContent();
  const emailValue = await textboxPage.getEmailOutput.textContent();
  const currentAdressValue =
    await textboxPage.getCurrentAdressOutput.textContent();
  const permanentAdressValue =
    await textboxPage.getPermanentAdressOutput.textContent();

  expect(nameValue).toContain("John Smith");
  expect(emailValue).toContain("smith@gmail.com");
  expect(currentAdressValue).toContain("New-York, Grow Street");
  expect(permanentAdressValue).toContain("Chikago, Green Street");
});

test("verify check box", async ({ page }) => {});
