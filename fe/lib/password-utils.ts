import bcrypt from "bcryptjs";

export function saltAndHashPassword(password: string) {
  const SALT_ROUNDS = 10;
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

export function comparePassword(password: string, hashedPassword: string) {
  return bcrypt.compareSync(password, hashedPassword);
}
