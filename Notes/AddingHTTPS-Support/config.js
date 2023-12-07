var environments = {};

// staging (default) environment
environments.staging = {
    'httpport' : 3200,
    'httpsport' : 3201,
    'envName' : 'staging'
};

// Production environment
environments.production = {
    'httpport' : 5000,
    'httpsport' : 5001,
    'envName' : 'production'
};

// Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;