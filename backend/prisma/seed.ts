import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = "Neil@2025!";
  const hash = await bcrypt.hash(password, 12);

  // ── 1. Seed Institutions ────────────────────────────────────────────────────
  const strathmore = await prisma.institution.upsert({
    where: { id: "inst-strathmore" },
    update: {},
    create: {
      id: "inst-strathmore",
      name: "Strathmore University",
      country: "Kenya",
      membershipType: "FULL",
      logoUrl: "/images/partners/strathmore.png",
    },
  });

  const uon = await prisma.institution.upsert({
    where: { id: "inst-uon" },
    update: {},
    create: {
      id: "inst-uon",
      name: "University of Nairobi",
      country: "Kenya",
      membershipType: "ASSOCIATE",
      logoUrl: "/images/partners/uon.png",
    },
  });

  // ── 2. ADMIN ────────────────────────────────────────────────────────────────
  await prisma.user.upsert({
    where: { email: "admin@neil.org" },
    update: {},
    create: {
      email: "admin@neil.org",
      passwordHash: hash,
      fullName: "NEIL Super Admin",
      role: "ADMIN",
    },
  });

  // ── 3. SECRETARIAT ──────────────────────────────────────────────────────────
  await prisma.user.upsert({
    where: { email: "secretariat@neil.org" },
    update: {},
    create: {
      email: "secretariat@neil.org",
      passwordHash: hash,
      fullName: "NEIL Secretariat",
      role: "SECRETARIAT",
    },
  });

  // ── 4. INSTITUTION (Member Institution Rep) ─────────────────────────────────
  await prisma.user.upsert({
    where: { email: "rep@strathmore.edu" },
    update: {},
    create: {
      email: "rep@strathmore.edu",
      passwordHash: hash,
      fullName: "Dr. James Kariuki",
      role: "INSTITUTION",
      institutionId: strathmore.id,
    },
  });

  await prisma.user.upsert({
    where: { email: "rep@uon.ac.ke" },
    update: {},
    create: {
      email: "rep@uon.ac.ke",
      passwordHash: hash,
      fullName: "Prof. Alice Mwangi",
      role: "INSTITUTION",
      institutionId: uon.id,
    },
  });

  // ── 5. FACULTY / RESEARCHER ─────────────────────────────────────────────────
  await prisma.user.upsert({
    where: { email: "researcher@strathmore.edu" },
    update: {},
    create: {
      email: "researcher@strathmore.edu",
      passwordHash: hash,
      fullName: "Dr. Sarah Wanjiku",
      role: "FACULTY",
      institutionId: strathmore.id,
    },
  });

  await prisma.user.upsert({
    where: { email: "faculty@uon.ac.ke" },
    update: {},
    create: {
      email: "faculty@uon.ac.ke",
      passwordHash: hash,
      fullName: "Dr. Peter Odhiambo",
      role: "FACULTY",
      institutionId: uon.id,
    },
  });

  // ── 6. STUDENT ──────────────────────────────────────────────────────────────
  await prisma.user.upsert({
    where: { email: "student@strathmore.edu" },
    update: {},
    create: {
      email: "student@strathmore.edu",
      passwordHash: hash,
      fullName: "Maxwell Omwoyo",
      role: "STUDENT",
      institutionId: strathmore.id,
    },
  });

  await prisma.user.upsert({
    where: { email: "student@uon.ac.ke" },
    update: {},
    create: {
      email: "student@uon.ac.ke",
      passwordHash: hash,
      fullName: "Aisha Kamau",
      role: "STUDENT",
      institutionId: uon.id,
    },
  });

  // ── 7. Partners ─────────────────────────────────────────────────────────────
  await prisma.partner.deleteMany({});
  await prisma.partner.createMany({
    data: [
      { name: "Kenya Vision 2030",             logoUrl: "/images/partners/vision2030.png",  featured: true  },
      { name: "Kenya National Innovation Agency", logoUrl: "/images/partners/knia.png",     featured: true  },
      { name: "Strathmore University",          logoUrl: "/images/partners/strathmore.png", featured: true  },
      { name: "World Bank",                     logoUrl: "/images/partners/world-bank.png", featured: true  },
      { name: "Mastercard Foundation",          logoUrl: "/images/partners/mastercard.png", featured: true  },
      { name: "Google for Startups",            logoUrl: "/images/partners/google.png",     featured: true  },
      { name: "University of Nairobi",          logoUrl: "/images/partners/uon.png",        featured: false },
    ],
    skipDuplicates: true,
  });

  // ── Print seed summary ───────────────────────────────────────────────────────
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                   NEIL SEED LOGINS                              ║
║                   Password for all: ${password}               ║
╠══════════════╦═══════════════════════════════╦══════════════════╣
║ Role         ║ Email                         ║ Name             ║
╠══════════════╬═══════════════════════════════╬══════════════════╣
║ ADMIN        ║ admin@neil.org                ║ NEIL Super Admin ║
║ SECRETARIAT  ║ secretariat@neil.org          ║ NEIL Secretariat ║
║ INSTITUTION  ║ rep@strathmore.edu            ║ Dr. James Kariuki║
║ INSTITUTION  ║ rep@uon.ac.ke                 ║ Prof. Alice Mwangi║
║ FACULTY      ║ researcher@strathmore.edu     ║ Dr. Sarah Wanjiku║
║ FACULTY      ║ faculty@uon.ac.ke             ║ Dr. Peter Odhiambo║
║ STUDENT      ║ student@strathmore.edu        ║ Maxwell Omwoyo   ║
║ STUDENT      ║ student@uon.ac.ke             ║ Aisha Kamau      ║
╚══════════════╩═══════════════════════════════╩══════════════════╝
`);
}

main()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
