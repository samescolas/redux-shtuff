export const baseURL = 'http://localhost:3000';

export const randomImage = () => {
	return `https://picsum.photos/400/400/?image=${(Math.random()*80).toFixed(0)}`;
}

export const currencyFormat = (price) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(price);
}

export const loremIpsum = (length) => `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo ex quis felis elementum, sit amet posuere urna sodales. Aenean convallis auctor quam id hendrerit. Cras in neque nec mauris rhoncus egestas. Cras maximus vel mauris ut ornare. Nullam efficitur quis enim a luctus. Vestibulum eget libero non ipsum viverra pellentesque. Mauris ullamcorper consectetur libero. Integer et est tortor. Fusce aliquam neque nec dictum tempor. Nullam sit amet ex feugiat, tincidunt ex non, fermentum neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque tempus placerat lacus eu sodales. Sed nec lectus cursus, maximus nibh vitae, lobortis velit. Suspendisse potenti. Praesent faucibus tellus id pellentesque ornare. Nunc vitae lectus id enim tincidunt consequat.
Sed nec lectus nunc. Sed sagittis pharetra ligula nec semper. Praesent sapien dolor, sollicitudin sit amet pharetra a, lobortis at augue. Sed quis elit felis. Fusce egestas orci a odio scelerisque, eget mollis lorem semper. Sed vestibulum varius turpis, non dapibus felis venenatis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tincidunt justo. Pellentesque eget blandit augue, sit amet tempus lectus. Curabitur ipsum nisl, ultrices ac lorem ut, tempus mattis purus. Sed molestie auctor mauris id commodo. Maecenas nec cursus orci, ut pellentesque nibh. Aenean fringilla magna purus, nec interdum eros elementum a. Sed a volutpat turpis. Nullam sit amet tempor nulla. Phasellus turpis erat, venenatis vitae consectetur et, ultricies quis risus.
Suspendisse luctus quam vitae imperdiet mollis. Fusce dapibus mauris eu commodo vestibulum. Aenean libero ipsum, auctor non ipsum a, pretium imperdiet tellus. Etiam in hendrerit tellus. Phasellus faucibus, enim vitae pellentesque rutrum, ante nunc egestas elit, laoreet rutrum odio mauris vel ex. Mauris ut tempus felis. Cras suscipit, tellus sed tempus condimentum, velit eros pellentesque justo, id faucibus metus tellus vitae arcu. Sed sed ultricies lacus. Aenean finibus lorem quis condimentum euismod. Suspendisse non sodales nisl. Etiam ligula urna, suscipit eget fermentum id, ullamcorper vestibulum quam. Maecenas a velit at sem finibus condimentum. Etiam eget sem ac sem ultricies placerat. Integer feugiat a sapien sit amet pharetra.
Praesent ultrices, eros at consectetur auctor, nisl urna sollicitudin mauris, id tristique sapien dui id elit. Phasellus sit amet neque nec risus bibendum accumsan. Aliquam placerat tempor elit sed pretium. Sed vel mi at urna volutpat pharetra sed vel elit. Praesent sed sodales sem. Nullam urna magna, lacinia vel tempus id, pharetra et dui. Sed vel congue massa, vel ullamcorper sapien. Morbi in nisl sit amet lectus fermentum efficitur vitae at ex. Vestibulum bibendum molestie massa vitae placerat. Aliquam sed risus feugiat, imperdiet ex vel, condimentum nunc. Proin faucibus, enim eget consectetur posuere, tellus arcu vulputate sem, eget congue sem est nec mauris.
Nunc id turpis in nisl placerat hendrerit. Maecenas venenatis, elit posuere dapibus tristique, neque massa venenatis enim, ac semper enim odio sed erat. Quisque posuere condimentum ante eget mollis. Fusce laoreet bibendum nunc, sit amet convallis odio tempus ac. Ut ut ex consequat, luctus orci a, sagittis est. Aenean laoreet imperdiet tristique. Maecenas euismod tempus arcu nec cursus. Vestibulum sed turpis mauris.`.slice(0, length);
