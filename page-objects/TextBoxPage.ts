import { expect, type Locator, type Page } from "@playwright/test";

export class TextBoxPage {
  readonly page: Page;
  readonly getTitle: Locator;
  readonly getFullNameField: Locator;
  readonly getEmailField: Locator;
  readonly getCurrentAdressField: Locator;
  readonly getPermanentAdressField: Locator;
  readonly getSubmitButton: Locator;
  readonly getNameOutput: Locator;
  readonly getEmailOutput: Locator;
  readonly getCurrentAdressOutput: Locator;
  readonly getPermanentAdressOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTitle = page.locator("xpath=//*[@id='app']/div/div/div[1]/div");
    this.getFullNameField = page.locator("xpath=//*[@id='userName']");
    this.getEmailField = page.locator("xpath=//*[@id='userEmail']");
    this.getCurrentAdressField = page.locator(
      "xpath=//*[@id='currentAddress']"
    );
    this.getPermanentAdressField = page.locator(
      "xpath=//*[@id='permanentAddress']"
    );
    this.getSubmitButton = page.locator("xpath=//*[@id='submit']");
    this.getNameOutput = page.locator("xpath=//*[@id='name']");
    this.getEmailOutput = page.locator("xpath=//*[@id='email']");
    this.getCurrentAdressOutput = page.locator(
      "xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[6]/div/p[3]"
    );
    this.getPermanentAdressOutput = page.locator(
      "xpath=/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[6]/div/p[4]"
    );
  }

  async goto() {
    await this.page.goto("https://demoqa.com/text-box");
  }
}
