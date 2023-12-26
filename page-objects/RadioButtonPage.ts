import { expect, type Locator, type Page } from "@playwright/test";

export class RadioButtonPage {
  readonly page: Page;
  readonly getTitle: Locator;
  readonly getQuestionText: Locator;
  readonly getOptionYes: Locator;
  readonly getOptionImpressive: Locator;
  readonly getTextAfterOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTitle = page.locator("xpath=//*[@class='main-header']");
    this.getQuestionText = page.locator("xpath=//div[@class='mb-3']");
    this.getOptionYes = page.locator(
      "xpath=//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[2]"
    );
    this.getOptionImpressive = page.locator(
      "xpath=//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]"
    );
    this.getTextAfterOption = page.locator(
      "xpath=//span[@class='text-success']"
    );
  }

  async goto() {
    await this.page.goto("https://demoqa.com/radio-button");
  }
}
