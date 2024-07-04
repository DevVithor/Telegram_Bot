import { describe, it, expect, afterAll, beforeAll } from "vitest"
import { CreateGroupUseCase } from "../../src/core/UseCase/GroupUseCase/CreateGroupUseCase/CreateGroupUseCase.js"
import { prismaClient } from "../../src/infra/lib/PrismaClient.js"
import { DeleteGroupUseCase } from "../../src/core/UseCase/GroupUseCase/DeleteGroupUseCase/DeleteGroupUseCase.js"

const createGroup = new CreateGroupUseCase(prismaClient)
const deleteGroup = new DeleteGroupUseCase(prismaClient)

describe("Should be create group", () => {

    const validity = new Date()

    it("Should return one error if send null values", async () => {

        const name = ""

        expect(createGroup.execute(String(name), validity)).rejects.toThrowError("Insira um valor valido!")


    })
    it("Should be throw Error when if validaty is less than Date", () => {

        const name = "test"

        validity.setDate(-1)

        expect(createGroup.execute(String(name), validity)).rejects.toThrowError("A validade precisa ser maior que o dia de hoje!")

    })
    it("Should be create Group", () => {



        expect(createGroup.execute("test", validity)).toEqual(createGroup)

    })

})
