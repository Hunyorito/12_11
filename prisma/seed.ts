/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from "../generated/prisma/client"
import { faker } from '@faker-js/faker'
import dotenv from 'dotenv'

dotenv.config()
const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction(async (ts) => {
    const gyerekek1:number[] = []
    const games:number[]=[]

    for (let i = 0; i < 5; i++) {
      const xgyerek = await ts.gyerek.create({
        data: {
          nev: faker.person.firstName(),
          cim: faker.location.streetAddress(),
          jo: faker.datatype.boolean(),
          gamesId: null,
        }
          
    }
    //  }
    )
    gyerekek1.push(xgyerek.id)

    }
    for (let i = 0; i < 5; i++) {
      const xgame = await ts.games.create({
        data: {
          nev: faker.lorem.words({ min: 1, max: 3 }),
          suly: faker.number.float({min:0.000001}),
          anyag : faker.lorem.word(),
        }
      })
      games.push(xgame.id)
    }
    // Nem kel öseze kapcsolni az adatokat
    //for (let i = 0; i < 10; i++) {}
})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
