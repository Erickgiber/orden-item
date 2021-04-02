const root = document.getElementById('root');


var mediaqueryList = window.matchMedia("(orientation: portrait)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
  if(EventoMediaQueryList.matches) {
    // Realizamos las acciones cuando cambia el estado de la mediaquery y ahora cumple su valor
    alert('Ahora has pasado a modo portrait, con tu pantalla orientada en vertical');
  } else {
    alert('Ahora has pasado a modo landscape, con tu pantalla orientada en horizontal');
  }
});

// Variables de etiquetas
const navbar = `
	<nav class="navbar">
		<ul>
			<li>Home</li>
			<li id="what">¿Como Jugar?</li>
			<li>Sobre mí</li>
		</ul>
	</nav>
 `;

const game = `
<div class="contenedor">
	<div class=lista>
			<li data-id="item-2">Item 2</li>
			<li data-id="item-4">Item 4</li>
			<li data-id="item-5">Item 5</li>
			<li data-id="item-3">Item 3</li>
			<li data-id="item-9">Item 9</li>
			<li data-id="item-1">Item 1</li>
			<li data-id="item-6">Item 6</li>
			<li data-id="item-10">Item 10</li>
			<li data-id="item-8">Item 8</li>
			<li data-id="item-7">Item 7</li>
	</div>
</div>
`;



 root.innerHTML += navbar + game;

document.querySelector('#what').addEventListener('click', function() {
	alert('Conchale maNoO ordena EsaVAina')
})


const lista = document.querySelector('.lista');
//SortableJS
Sortable.create(lista, {
    animation: 230,
    chosenClass: "seleccionado",
    dragClass: "mover",
    onEnd: () => {
        console.log('Se movió el número de forma éxitosa');
    },
    group: "Lista-Items",
    store: {
        set: (sortable) => {
            const orden = sortable.toArray();
   // --- Ignorar ---        localStorage.setItem(sortable.options.group.name, orden.join('-'));
            console.log(orden);
            if (orden[0] === 'item-1'
             && orden[1] === 'item-2'
             && orden[2] === 'item-3'
             && orden[3] === 'item-4'
             && orden[4] === 'item-5'
             && orden[5] === 'item-6'
             && orden[6] === 'item-7'
             && orden[7] === 'item-8'
             && orden[8] === 'item-9'
             && orden[9] === 'item-10'
             ) {
             	root. innerHTML = navbar;
                alert('¡Ordenado Correctamente!');
            }
        },
 /* --- Ignorar ---       get: (sortable) => {
            const datos = localStorage.getItem(sortable.options.group.name);
            return datos ? datos.split('-') : console.log('FATAL! Error al obtener el item de localStorage');
        }, */
    },
});


