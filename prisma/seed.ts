import bcrypt from "bcrypt";
import { prisma } from "../src/libs/prisma.js";

const hashedPW = () => bcrypt.hashSync("123456", 8);

const userData = [
  {
    firstName: "Andy",
    lastName: "Codecamp",
    password: hashedPW(),
    email: "andy@ggg.mail",
    profileImage: "https://www.svgrepo.com/show/420364/avatar-male-man.svg",
  },
  {
    firstName: "Bobby",
    lastName: "Codecamp",
    password: hashedPW(),
    email: "bobby@ggg.mail",
    profileImage:
      "https://www.svgrepo.com/show/420319/actor-chaplin-comedy.svg",
  },
  {
    firstName: "Candy",
    lastName: "Codecamp",
    password: hashedPW(),
    mobile: "1111111111",
    profileImage: "https://www.svgrepo.com/show/420327/avatar-child-girl.svg",
  },
  {
    firstName: "Danny",
    lastName: "Codecamp",
    password: hashedPW(),
    mobile: "2222222222",
    profileImage:
      "https://www.svgrepo.com/show/420314/builder-helmet-worker.svg",
  },
];

async function main() {
  console.log("clear data in Tables");
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.relationship.deleteMany();
  await prisma.user.deleteMany();

  console.log("Start seeding...");
  const createUsers = await prisma.user.createMany({
    data: userData,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // exit(1) out with error || (0) out without error
    process.exit(1);
  });
