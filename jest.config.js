module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Usamos babel-jest para transformar archivos JS y JSX
  },
  testEnvironment: 'jsdom', // Necesario para el entorno de React/Next.js
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Archivo de configuración adicional si es necesario
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapea los imports con '@'
  },
};
