import { PrismaClient, Role, BookingStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const NUM_USERS = 50;
const NUM_CAT_OWNERS = 30;
const NUM_CAT_SITTERS = 20;
const NUM_CATS = 60;
const NUM_AVAILABILITIES = 100;
const NUM_BOOKINGS = 40;

async function main() {
  // Create Users
  const users = [];
  for (let i = 0; i < NUM_USERS; i++) {
    const user = await prisma.user.create({
      data: {
        user_name: faker.internet.userName(),
        full_name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement([Role.OWNER, Role.PET_SITTER]),
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        location: faker.location.city(),
        description: faker.lorem.paragraph(),
      },
    });
    users.push(user);
  }

  // Create Cat Owners
  const catOwners = [];
  for (let i = 0; i < NUM_CAT_OWNERS; i++) {
    const owner = await prisma.catOwner.create({
      data: {
        userId: users[i].id,
      },
    });
    catOwners.push(owner);
  }

  // Create Cat Sitters
  const catSitters = [];
  for (let i = NUM_CAT_OWNERS; i < NUM_USERS; i++) {
    const sitter = await prisma.catSitter.create({
      data: {
        userId: users[i].id,
        experience: faker.lorem.paragraph(),
        rate: parseFloat(faker.finance.amount(10, 50, 2)),
      },
    });
    catSitters.push(sitter);
  }

  // Create Cats
  for (let i = 0; i < NUM_CATS; i++) {
    await prisma.cat.create({
      data: {
        name: faker.animal.cat(),
        age: faker.number.int({ min: 1, max: 20 }),
        breed: faker.animal.cat(),
        photo: faker.image.url(),
        medicalHistory: faker.lorem.sentence(),
        behavior: faker.lorem.sentence(),
        ownerId: catOwners[faker.number.int({ min: 0, max: catOwners.length - 1 })].id,
      },
    });
  }

  // Create Availabilities
  for (let i = 0; i < NUM_AVAILABILITIES; i++) {
    await prisma.availability.create({
      data: {
        date: faker.date.future(),
        isAvailable: faker.datatype.boolean(),
        catSitterId: catSitters[faker.number.int({ min: 0, max: catSitters.length - 1 })].id,
      },
    });
  }

  // Create Bookings
  for (let i = 0; i < NUM_BOOKINGS; i++) {
    const startDate = faker.date.future();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + faker.number.int({ min: 1, max: 7 }));

    await prisma.booking.create({
      data: {
        startDate,
        endDate,
        status: faker.helpers.arrayElement(Object.values(BookingStatus)),
        catOwnerId: catOwners[faker.number.int({ min: 0, max: catOwners.length - 1 })].id,
        catSitterId: catSitters[faker.number.int({ min: 0, max: catSitters.length - 1 })].id,
      },
    });
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });