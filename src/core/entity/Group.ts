export default class Group {
    name: string;
    validity: Date;

    constructor(data: Group) {
        this.name = data.name
        this.validity = data.validity
    }
}