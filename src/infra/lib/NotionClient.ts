import { Client } from "@notionhq/client"

export const pageId = process.env.NOTION_PAGE_ID
const apiKey = process.env.NOTION_API_KEY

export const notion = new Client({ auth: apiKey })