import { chromium, firefox, webkit, devices } from 'playwright';

const iPhone = devices['iPhone 6'];

export const browserType = chromium

export const launchConfig = {headless: false, slowMo: 10}

export const contextConfig = { viewport: iPhone.viewport, userAgent: iPhone.userAgent}
