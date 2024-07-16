import puppeteer from "puppeteer";
import { FindGroupUseCase } from "../GroupUseCase/FindGroupUseCase/FindGroupUseCase.js";
import { BadRequest } from "../../../middleware/BadRequest.js";
import { CreateScriptRepository } from "../../repository/ScriptRepository/CreateScriptRepository/CreateScriptReposity.js";
import { ScriptDTO } from "../../../infra/controller/ScriptController/ScriptDTO.js";

export class GetProductsUseCase {
    constructor(private findGroup: FindGroupUseCase, private sendDataForRepository: CreateScriptRepository) { }

    async execute(products: string, groupId: number) {

        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        page.setDefaultTimeout(60000)

        await page.setViewport({ width: 1280, height: 1024 })

        await page.goto("https://www.festval.com/")

        await page.locator(".vtex-styleguide-9-x-input").fill(products)

        await page.keyboard.press("Enter")

        const searchResultSelector = ".vtex-search-result-3-x-galleryItem"

        await page.waitForSelector(searchResultSelector)
        await page.click(searchResultSelector)

        const elementOfName = await page.waitForSelector("h1")

        const product = await elementOfName?.evaluate(() => {
            const element = document.querySelector("h1");
            return element ? element.innerText : null
        })

        if (!product) {
            throw new Error
        }

        const elementOfDescription = await page.waitForSelector("div.vtex-store-components-3-x-productDescriptionText")

        const description = await elementOfDescription?.evaluate(() => {
            const element = document.querySelector("div.vtex-store-components-3-x-productDescriptionText")
            return element ? (element as HTMLElement).innerText : null
        })

        if (!description) {
            throw new Error
        }

        const elementOfValue = await page.waitForSelector("span.vtex-product-price-1-x-sellingPrice")

        const descont = await elementOfValue?.evaluate(() => {
            const element = document.querySelector("span.vtex-product-price-1-x-sellingPriceValue")
            return element ? (element as HTMLElement).innerText : null
        })

        if (!descont) {
            throw new Error
        }

        const link = page.url()

        page.close()

        const { id } = await this.findGroup.execute(groupId)

        if (!id) {
            throw new BadRequest("Grupo não existe", "informe um grupo valido!")
        }

        const info: ScriptDTO = ({ link, product, descont, description, groupId })

        const defineScript = this.sendDataForRepository.createScript(info)

        return defineScript

    }
}