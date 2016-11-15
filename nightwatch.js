const env = require('dotenv').config();

const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;

module.exports = {
  src_folders : ['tests'],
  output_folder : 'reports',
  custom_commands_path : 'custom_commands',
  custom_assertions_path : '',
  page_objects_path : '',
  globals_path : '',

  selenium : {
    start_process : false,
    server_path : '',
    log_path : '',
    host : '127.0.0.1',
    port : 4444,
    cli_args : {
      'webdriver.chrome.driver' : '',
      'webdriver.ie.driver' : ''
    }
  },

  test_workers : { enabled : true, workers : 'auto' },

  test_settings : {
    default : {
      launch_url : 'http://localhost',
      selenium_port  : 80,
      selenium_host  : 'ondemand.saucelabs.com',
      silent: true,
      screenshots : {
        enabled : false,
        path : ''
      },
      username : process.env.SAUCE_USERNAME, 
      access_key : process.env.SAUCE_ACCESS_KEY,

      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
        build: `build-${TRAVIS_JOB_NUMBER}`,
        'tunnel-identifier': TRAVIS_JOB_NUMBER
      }
    }
  }
}