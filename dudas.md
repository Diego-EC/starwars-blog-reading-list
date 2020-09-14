1. ¿Cómo es que se refrescan los cambios directamente en el browser al compilar?
react hot loader
2. ¿carpeta bootstrap para componente Card está bien?
si
3. Está bien el nombre <HorizontalScrollingItemList />
HorizontalScrollList sin ing, por que no es una acción, e item tampoco por que es lo que está dentro.
4. 
- ¿Está bien esto como arrow function? export const Card = props => {}
- ¿Sería mejor ponerle un nombre a la función?
mejor declarar el componente como función directamente y ya está.

5. sigo sin saber controlar la altura con bootstrap.

6. En los componentes de detalle, en el Layout, ¿y si pongo el nombre del item en lugar de su id?
nombre mejor
7. let jsonMap = json.results.map(function(character, index) {
    ¿cómo mapeo el json completo?
esta bien así, es que hay que paginar: next: "http://swapi.dev/api/people/?page=2"
devuelve de 10 en 10
Es que el json que me devuelve esta api es un objeto, no un array, por eso no lo podía mapear.
nota: que recarge más si estoy llegando a los ultimos con el scroll.
8. ¿Hago una carta para cada item? (characters, planets, vehicles)
en este caso está bien. Tienen las mismas lógicas además de estilo.
9. Esto no me funciona this.props.history.push()
<!--<button onClick={() => this.props.history.push("/login")}>Take me to login</button>-->
Tengo que usar Link?
solución: useParams
import { useParams } from "react-router-dom";
destructure asingment
```js
	let { id, name } = useParams();
	return (
		<div className="">
			<h1>CharacterDetail view {id}</h1>
		</div>
    );
```