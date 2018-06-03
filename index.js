function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  }

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
        debugger
    const driverFirstName = driver.split(' ')[0]
    const driverLastName = driver.split(' ')[1]
    return {firstName: driverFirstName, driverLastName: lastName};
});
}
