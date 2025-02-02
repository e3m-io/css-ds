export type ButtonProps = {
	variant: "normal" | "warning" | "danger";
	weight: "primary" | "secondary" | "tertiary";
};

const buttonClassMatrix = {
	normal: {
		primary: "bg-brand-solid",
		secondary: "bg-primary",
		tertiary: "text-brand",
	} as const,
	warning: {
		primary: "bg-warning-solid",
		secondary: "bg-warning",
		tertiary: "text-warning",
	} as const,
	danger: {
		primary: "bg-danger-solid",
		secondary: "bg-danger",
		tertiary: "text-danger",
	} as const,
} satisfies Record<
	ButtonProps["variant"],
	Record<ButtonProps["weight"], string>
>;

export const getButtonClasses = (props: ButtonProps) =>
	`btn hover focus-visible text-weight--emphasized ${
		buttonClassMatrix[props.variant][props.weight]
	}` as const;

export const getIconButtonClasses = (props: ButtonProps) =>
	`${getButtonClasses(props)} btn--icon-only` as const;
