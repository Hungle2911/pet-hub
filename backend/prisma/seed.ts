import { PrismaClient, Role, BookingStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const NUM_CAT_SITTERS = 50;
const NUM_AVAILABILITIES = 200;

// Toronto area boundaries (approximate)
const TORONTO_LAT_MIN = 43.58;
const TORONTO_LAT_MAX = 43.85;
const TORONTO_LON_MIN = -79.64;
const TORONTO_LON_MAX = -79.12;

// List of Toronto area cities/neighborhoods
const TORONTO_AREAS = [
  'Toronto', 'Scarborough', 'North York', 'Etobicoke', 'York', 'East York',
  'Mississauga', 'Brampton', 'Markham', 'Vaughan', 'Richmond Hill', 'Oakville',
  'Burlington', 'Pickering', 'Ajax', 'Whitby', 'Oshawa'
];

function generateTorontoAddress() {
  return {
    latitude: faker.number.float({ min: TORONTO_LAT_MIN, max: TORONTO_LAT_MAX, precision: 0.000001 }),
    longitude: faker.number.float({ min: TORONTO_LON_MIN, max: TORONTO_LON_MAX, precision: 0.000001 }),
    location: faker.helpers.arrayElement(TORONTO_AREAS)
  };
}

async function main() {
  // Create Cat Sitters in Toronto area
  const catSitters = [];
  for (let i = 0; i < NUM_CAT_SITTERS; i++) {
    const { latitude, longitude, location } = generateTorontoAddress();
    const user = await prisma.user.create({
      data: {
        user_name: faker.internet.userName(),
        full_name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: Role.PET_SITTER,
        latitude,
        longitude,
        location,
        description: faker.lorem.paragraph(),
      },
    });

    const sitter = await prisma.catSitter.create({
      data: {
        userId: user.id,
        experience: faker.lorem.paragraph(),
        rate: parseFloat(faker.finance.amount(15, 50, 2)), // Toronto rates might be higher
      },
    });
    catSitters.push(sitter);
  }

  // Create Availabilities for Cat Sitters
  for (let i = 0; i < NUM_AVAILABILITIES; i++) {
    await prisma.availability.create({
      data: {
        date: faker.date.future(),
        isAvailable: faker.datatype.boolean(),
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