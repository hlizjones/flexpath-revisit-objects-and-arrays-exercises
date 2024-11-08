const config = {
  apiEndpoint: "https://api.example.com",
  timeout: 5000,
};

Object.seal(config);

// Attempting to add a new property
config.newProperty = true; // Fails silently (or throws in strict mode)

// Attempting to modify a property
config.timeout = 3000; // Succeeds

// Attempting to delete a property
delete config.apiEndpoint; // Fails silently (or throws in strict mode)

console.log(config);
// Outputs:
// { apiEndpoint: 'https://api.example.com', timeout: 3000 }

const settings = {
  theme: "dark",
  version: 1.0,
};

Object.freeze(settings);

// Attempting to add a new property
settings.newSetting = "value"; // Fails silently

// Attempting to modify a property
settings.theme = "light"; // Fails silently

// Attempting to delete a property
delete settings.version; // Fails silently

console.log(settings);
// Outputs:
// { theme: 'dark', version: 1.0 }
