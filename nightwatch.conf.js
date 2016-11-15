module.exports = (function(settings) {
  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  if(process.env.TRAVIS_JOB_NUMBER) {
    settings.travis.number = process.env.TRAVIS_JOB_NUMBER;
  }
  return settings;
})(require('./nightwatch.json'));
