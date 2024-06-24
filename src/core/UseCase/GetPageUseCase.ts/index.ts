import { GetPage } from "./GetPageUseCase";
import { notion } from "../../../infra/lib/NotionClient";

export const getPage = new GetPage(
    notion
)