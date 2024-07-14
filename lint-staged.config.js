module.exports = {
    // Run type-check on changes to TypeScript files
    '**/*.ts?(x)': () => 'npm run lint:fix',
    // Run ESLint on changes to JavaScript/TypeScript files
    '**/*.(css|scss)': (filenames) => 'npm run stylelint:fix',
};
