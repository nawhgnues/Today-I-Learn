// old
const hasValidPostcode = (u) => {
  u && u.address && u.address.postcode && u.address.postcode.valid;
};

// ES6
const hasValidPostcode = (u) => {
  u?.address?.postcode?.valid;
};
