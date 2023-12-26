import { expect, type Locator, type Page } from "@playwright/test";

export class ElementsPage {
  readonly page: Page;
  readonly getElementsTitle: Locator;
  readonly getTextBox: Locator;
  readonly getCheckBox: Locator;
  readonly getRadioButton: Locator;
  readonly getWebTables: Locator;
  readonly getButtons: Locator;
  readonly getLinks: Locator;
  readonly getBrokenLinksImages: Locator;
  readonly getUploadDownload: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getElementsTitle = page.locator(
      "xpath=//*[@id='app']/div/div/div[1]/div"
    );
    this.getTextBox = page.locator("xpath=//*[@id='item-0']");
    this.getCheckBox = page.locator("xpath=//*[@id='item-1']");
    this.getRadioButton = page.locator("xpath=//*[@id='item-2']");
    this.getWebTables = page.locator("xpath=//*[@id='item-3']");
    this.getButtons = page.locator("xpath=//*[@id='item-4']");
    this.getWebTables = page.locator("xpath=//*[@id='item-5']");
    this.getLinks = page.locator("xpath=//*[@id='item-6']");
    this.getBrokenLinksImages = page.locator("xpath=//*[@id='item-7']");
    this.getUploadDownload = page.locator("xpath=//*[@id='item-8']");
  }

  async goto() {
    await this.page.goto("https://demoqa.com/");
  }
}
