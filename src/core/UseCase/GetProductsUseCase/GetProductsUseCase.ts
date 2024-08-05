import puppeteer from "puppeteer";
import { FindPlatformUseCase } from "../PlatformUseCase/FindPlatformUseCase.js";
import { StartBotUseCase } from "../StartBotUseCase/StartBotUseCase.js";

export class GetProductsUseCase {
    constructor(private findPlatform: FindPlatformUseCase, private startBot: StartBotUseCase) { }

    async execute(products: string, plaformId: number) {

        const platformData = await this.findPlatform.execute(plaformId)

        const browser = await puppeteer.launch({ headless: "shell" })
        const page = await browser.newPage()

        page.setDefaultTimeout(60000)

        await page.setViewport({ width: 1280, height: 1024 })

        await page.goto(platformData.Stage1!)

        await page.locator(platformData.Stage2!).fill(products)
        await page.keyboard.press("Enter")

        const searchResultSelector = platformData.Stage3!

        await page.waitForSelector(searchResultSelector)
        await page.click(searchResultSelector)

        await page.waitForSelector(platformData.Stage4!)

        const product = await page.evaluate((selector) => {
            const element = document.querySelector(selector);
            return element ? (element as HTMLElement).innerText : null
        }, platformData.Stage5!)

        if (!product) {
            throw new Error
        }

        await page.waitForSelector(platformData.Stage6!)

        const description = await page.evaluate((selector) => {
            const element = document.querySelector(selector)
            return element ? (element as HTMLElement).innerText : null
        }, platformData.Stage7!)

        if (!description) {
            throw new Error
        }

        await page.waitForSelector(platformData.Stage8!)

        const descont = await page.evaluate((selector) => {
            const element = document.querySelector(selector)
            return element ? (element as HTMLElement).innerText : null
        }, platformData.Stage9!)

        if (!descont) {
            throw new Error
        }

        const link = page.url()

        page.close()

        const info = ({ link, product, descont, description })

        console.log(info)

        const bot = await this.startBot.execute(info)

        return bot
    }

}