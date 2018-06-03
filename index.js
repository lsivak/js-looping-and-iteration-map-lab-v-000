function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  }

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
        debugger
    const firstName = driver.split(' '), [0]
    const lastName = driver.split(' '), [1]
    return {firstName: firstName, lastName: lastName};
});
}
