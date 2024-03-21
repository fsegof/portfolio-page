module.exports = {
    namespace: 'YlloStarter', // PHP namespace name [PascalCase]
    pluginNameForFileNames: 'yllo-plugin', // occurrence of plugin name in file names [kebab-case]
    pluginNameForFunctions: 'yllo_plugin', // occurrence of plugin name in function names [snake_case]
    baseRoute: 'wp-yllo', // API route base name (starter.local/wp-json/<wp-ew>/v1/), usually short and prefixed with ew [kebab-case]
    themeNameForFileNames: 'yllo-theme', // theme folder and files occurrences name [kebab-case]
    webAppServerDomain: 'starter.local', // local domain name [kebab-case]
    artifactName: 'ylloStarter' // Azure Pipelines artifact name, if necessary [camelCase]
};
