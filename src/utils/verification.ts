export default function verification(email: string, login: string, password: string) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (!login) return 'login is empty';
  if (!email) return 'email is empty';
  if (!password) return 'password is empty';

  if (!EMAIL_REGEXP.test(email)) {
    return 'email is incorrect';
  }

  return '';
}
