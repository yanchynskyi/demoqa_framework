import { expect, type Locator, type Page } from "@playwright/test";

export class CheckBoxPage {
  readonly page: Page;
  readonly getTitle: Locator;
  readonly getCheckBoxTitle: Locator;
  readonly getCheckBox: Locator;
  readonly getText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTitle = page.locator("xpath=//*[@id='app']");
    this.getCheckBoxTitle = page.locator("xpath=//*[@id='tree-node']");
    this.getCheckBox = page.locator(
      "xpath=//*[@id='tree-node']/ol/li/span/label/span[1]"
    );
    this.getText = page.locator("xpath=//*[@id='result']/span[1]");
  }

  async goto() {
    await this.page.goto("https://demoqa.com/checkbox");
  }
}
