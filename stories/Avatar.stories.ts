export default {
	title: "Components/Avatar",
	tags: ["autodocs"],
	render: (props) => {
		return `<span class="avatar">${props.children}</span>`;
	},
	argTypes: {},
};

export const Default = {
	args: {
		children: "AB",
	},
};
