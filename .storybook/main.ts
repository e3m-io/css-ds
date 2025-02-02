import { type StorybookConfig } from "@storybook/html-vite";

const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/html-vite",
		options: {},
	},
} satisfies StorybookConfig;

export default config;
