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

export const AllVariants = () => `
<div>
	<button class="${getButtonClasses({
		variant: "normal",
		weight: "primary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "normal",
		weight: "secondary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "normal",
		weight: "tertiary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "warning",
		weight: "primary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "warning",
		weight: "secondary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "warning",
		weight: "tertiary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "danger",
		weight: "primary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "danger",
		weight: "secondary",
	})}">Hello world</button>

	<button class="${getButtonClasses({
		variant: "danger",
		weight: "tertiary",
	})}">Hello world</button>

</div>
`;
