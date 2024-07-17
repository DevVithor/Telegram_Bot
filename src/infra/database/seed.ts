import { prismaClient } from "../lib/PrismaClient.js";

async function main() {
    const Platform1 = await prismaClient.platform.create({
        data: {
            Stage1: "https://www.festval.com/",
            Stage2: ".vtex-styleguide-9-x-input",
            Stage3: ".vtex-search-result-3-x-galleryItem",
            Stage4: "h1",
            Stage5: "h1",
            Stage6: "div.vtex-store-components-3-x-productDescriptionText",
            Stage7: "div.vtex-store-components-3-x-productDescriptionText",
            Stage8: "span.vtex-product-price-1-x-sellingPrice",
            Stage9: "span.vtex-product-price-1-x-sellingPriceValue",
        }
    })
    // const Platform2 = await prismaClient.platform.create({
    //     data: {
    //         Stage1: "",
    //         Stage2: "",
    //         Stage3: "",
    //         Stage4: "",
    //         Stage5: "",
    //         Stage6: "",
    //         Stage7: "",
    //         Stage8: "",
    //         Stage9: "",
    //         Stage10: "",
    //     }
    // })
    // const Platform3 = await prismaClient.platform.create({
    //     data: {
    //         Stage1: "",
    //         Stage2: "",
    //         Stage3: "",
    //         Stage4: "",
    //         Stage5: "",
    //         Stage6: "",
    //         Stage7: "",
    //         Stage8: "",
    //         Stage9: "",
    //         Stage10: "",
    //     }
    // })
    console.log(Platform1)
}
main()