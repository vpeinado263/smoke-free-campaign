module.exports = (api) => {
    api.cache(true);
  
    const presets = [
      '@babel/preset-env',
      '@babel/preset-react'
    ];
  
    const plugins = [];
  
    if (process.env.NODE_ENV === 'test') {
      // Solo aplica configuraciones de Babel para las pruebas
      return {
        presets,
        plugins
      };
    }
  
    // Configuración predeterminada de producción
    return {};
  };
  