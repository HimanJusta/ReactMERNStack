const RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (emails) => {
  const invalidEmailsList = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !RE.test(email));

  if (invalidEmailsList.length > 0) {
    return `Following emails are invalid: ${invalidEmailsList.join(',')}`;
  }

  return null;
};
