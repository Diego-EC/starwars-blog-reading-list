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
https://reactrouter.com/web/guides/quick-start
https://reactrouter.com/web/api/Hooks/useparams
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

## de Context api
10. 
- Utilizando el código de ejemplo de la documentación me da el error
```js
// Step 2: Create a ContextWrapper component that has to be the parent of every consumer.
import React from 'react';

export const AppContext = React.createContext(null);

export class ContextWrapper extends React.Component {
	constructor() {
	    super();
	    this.state = {
		store: {
			todos: ["Make the bed", "Take out the trash"]
		},
		actions: {
			addTask: title => this.setState({ todos: this.state.todos.concat(title) })
		}
	    };
	}
	render() {
		return (
		<AppContext.Provider value={this.state}>
	        	{this.props.children}
		</AppContext.Provider>
		);
	}
}
```

> react 'children' is missing in props validation
- que resuelvo con 
https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation

```js
static get propTypes() { 
    return { 
        children: PropTypes.any
    }; 
}
```

11. ¿injectContext?

12. ¿tiene sentido poner código después de un throw error?

13. Que es mejor,
- guardar en Store el json tal cual lo devuelve backend?
- guardar en Store el json ya mapeado?

14. Cada vez que cambio un valor en context, ¿se re-renderizan todos los componentes afectados?

15. Dos arrays por item 🙅

