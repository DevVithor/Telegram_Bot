export class Script {
    link: string;
    groupId: number;
    product: string;
    descont: string;
    description: string;

    constructor(data: Script) {

        this.link = data.link
        this.groupId = data.groupId
        this.product = data.product
        this.descont = data.descont
        this.description = data.description

    }
}