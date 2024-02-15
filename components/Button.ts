export type ButtonProps = {
	variant: "normal" | "warning" | "danger";
	weight: "primary" | "secondary" | "tertiary";
}

export const getButtonClasses = (
	props: ButtonProps
) => `btn btn--vt-${props.variant} btn--wt-${props.weight}` as const;

export const getIconButtonClasses = (
	props: ButtonProps
) => `${getButtonClasses(props)} btn--icon-only` as const;
