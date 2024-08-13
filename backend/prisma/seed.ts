import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const NUM_PET_SITTERS = 20;
const TORONTO_BOUNDS = {
  lat: { min: 43.58, max: 43.85 },
  lng: { min: -79.64, max: -79.20 },
};

async function main() {

  for (let i = 0; i < NUM_PET_SITTERS; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const userData: Prisma.UserCreateInput = {
      auth0Id: faker.string.uuid(), // You may need to adjust this based on your Auth0 setup
      first_name: firstName,
      last_name: lastName,
      email: faker.internet.email({ firstName, lastName }),
      role: 'PET_SITTER',
      latitude: faker.number.float({ min: TORONTO_BOUNDS.lat.min, max: TORONTO_BOUNDS.lat.max, precision: 0.000001 }),
      longitude: faker.number.float({ min: TORONTO_BOUNDS.lng.min, max: TORONTO_BOUNDS.lng.max, precision: 0.000001 }),
      location: 'Toronto',
      description: faker.lorem.paragraph(),
      catSitter: {
        create: {
          experience: `${faker.number.int({ min: 1, max: 10 })} years`,
          rate: faker.number.int({ min: 20, max: 50 }),
        },
      },
    };

    const user = await prisma.user.create({
      data: userData,
      include: { catSitter: true }, // Include the catSitter in the result
    });

    if (user.catSitter) {
      const today = new Date();
      for (let j = 0; j < 10; j++) {
        const startDate = new Date(today);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + faker.number.int({ min: 1, max: 7 }));
        
        await prisma.availability.create({
          data: {
            start_date: startDate,
            end_date: endDate,
            isAvailable: true, 
            catSitter: { connect: { id: user.catSitter.id } },
          },
        });
      }
    }

    console.log(`Created pet sitter: ${firstName} ${lastName}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });