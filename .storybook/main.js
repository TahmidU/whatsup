import path from 'path';
export default {
  stories: ['../resources/js/**/*.mdx', '../resources/js/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  async viteFinal(config) {
    
    if(config.resolve){
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/*': path.resolve(__dirname, '../resources/js/*'),
      };
    }

    // config.module.rules.push({
    //     resolve: {
    //       alias: {
    //         components: path.resolve(__dirname, "../resources/js/components"),
    //         atoms: path.resolve(__dirname, "../resources/js/components/atoms"),
    //         molecules: path.resolve(__dirname, "../resources/js/components/molecules"),
    //         organisms: path.resolve(__dirname, "../resources/js/components/organisms"),
    //         pages: path.resolve(__dirname, "../resources/js/Pages"),
    //         context: path.resolve(__dirname, "../resources/js/context"),
    //         hooks: path.resolve(__dirname, "../resources/js/hooks"),
    //         icons: path.resolve(__dirname, "../resources/js/icons"),
    //         resources: path.resolve(__dirname, "../resources/js/resources"),
    //         translations: path.resolve(__dirname, "../resources/js/translations"),
    //         types: path.resolve(__dirname, "../resources/js/types"),
    //         utils: path.resolve(__dirname, "../resources/js/utils"),
    //       },
    //     },
    //   });
  
    return config;
  },

  docs: {
    autodocs: true
  }
};