function lowerCaseDrivers(drivers) {
  const newDrivers = map(drivers, function (driver) {
    return object.assign ({}, driver, {driver.toLowerCase())
})
}
