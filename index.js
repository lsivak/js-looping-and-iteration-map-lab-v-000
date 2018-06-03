function lowerCaseDrivers(drivers) {
  const newDrivers = map(drivers, function(driver) {
    debugger
    return object.assign ({}, driver, {driver}.toLowerCase())
})
}
