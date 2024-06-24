import { Client } from "@notionhq/client"
import { Request, Response } from "express"

export class GetPage {
    constructor(private notion: Client) { }

    async execute(req: Request, res: Response) {
        const pageId = process.env.NOTION_PAGE_ID
        const response = await this.notion.pages.retrieve({ page_id: pageId! })

        return res.status(200).json(response)

    }
}
