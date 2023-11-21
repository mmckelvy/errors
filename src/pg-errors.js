module.exports = {
  uniqueViolation(err) {
    return err.code && err.code === '23505';
  },
  checkViolation(err) {
    return err.code && err.code === '23514';
  },
  invalidDate(err) {
    return err.code && (err.code === '22008' || '22007');
  },
  syntaxError(err) {
    return err.code && err.code === '42601';
  },
  restrictViolation(err) {
    return err.code && err.code === '23001';
  },
  foreignKeyViolation(err) {
    return err.code && err.code === '23503';
  },
  notNullViolation(err) {
    return err.code && err.code === '23502';
  },
  dataException(err) {
    return err.code && /^22.+$/.test(err.code);
  },
  undefinedColumn(err) {
    return err.code && err.code === '42703';
  },
};
