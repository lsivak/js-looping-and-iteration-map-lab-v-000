function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  }

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    return object.assign ({}, driver {firstName: 'firstName', lastName: 'lastName'});
})
}
