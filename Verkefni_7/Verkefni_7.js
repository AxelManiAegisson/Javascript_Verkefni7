function createNode(element){
	return document.createElement(element);
}

function appen(parent,el){
	return parent.appendChild(el);
}

const ul = document.getElementById("syningar");

const url = 'https://apis.is/concerts';




fetch(url)
	.then((resp) => resp.json())
	.then(function(data){
		let syningar = data.results;

		return syningar.map(function(syningar){
			let li = createNode('li'),
			img = createNode('img'),
			span = createNode('span');

			img.src=syningar.picture.medium;

			span.textContent={syningar.eventDateName.first} ${syningar.eventDateName.last};

			append(li,img);
			append(li,span);
			append(ul,il);

		})
	})
	.catch(function(error){
		console.log(JSON.stringify(error));
	})
