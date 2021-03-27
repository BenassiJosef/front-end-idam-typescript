import { browserType, launchConfig, contextConfig } from '../playwright.config'
import { BrowserContext, Browser, Page } from "playwright";
import {globals} from "../constants"

const rootSelector = '#root';
let browser: Browser, context: BrowserContext, page: Page;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
    browser = await browserType.launch(launchConfig);
    context = await browser.newContext(contextConfig);
    page = await context.newPage();
    await page.goto(globals.baseURL);
};

export const close = async () => await browser.close();

export const getTitle = async () => await page.title();
