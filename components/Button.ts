export type ButtonProps = {
	variant: "normal" | "warning" | "danger";
	weight: "primary" | "secondary" | "tertiary";
}

const buttonClassMatrix = {
	"normal": {
		"primary": "bg-brand-solid",
		"secondary": "bg-primary border-thin",
		"tertiary": ""
	} as const,
	"warning": {
		"primary": "bg-warning-solid",
		"secondary": "",
		"tertiary": ""
	} as const,
	"danger": {
		"primary": "bg-danger-solid",
		"secondary": "",
		"tertiary": ""
	} as const
} satisfies Record<ButtonProps["variant"], Record<ButtonProps["weight"], string>>

export const getButtonClasses = (
	props: ButtonProps
) => `btn hovered-bg ${buttonClassMatrix[props.variant][props.weight]}` as const;

export const getIconButtonClasses = (
	props: ButtonProps
) => `${getButtonClasses(props)} btn--icon-only` as const;
