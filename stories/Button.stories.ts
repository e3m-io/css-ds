import { fn } from "@storybook/test";
import { type ButtonProps, getButtonClasses } from "../components/Button";

type StorybookButtonProps = ButtonProps & { children: string };

export default {
	title: "Components/Button",
	tags: ["autodocs"],
	render: (props: StorybookButtonProps) => {
		return `<button class="${getButtonClasses(props)}">${
			props.children
		}</button>`;
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["normal", "warning", "danger"],
		},
		weight: {
			control: { type: "select" },
			options: ["primary", "secondary", "tertiary"],
		},
	},
	args: { onClick: fn() },
};

export const Primary = {
	args: {
		children: "Hello world",
		variant: "normal",
		weight: "primary",
	} satisfies StorybookButtonProps,
};
