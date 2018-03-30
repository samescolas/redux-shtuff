export const getRandomImage = () => {
	let imageId = parseInt(Math.random() * 1000).toString();

	return `https://picsum.photos/200/300/?image=${imageId}`;
};
