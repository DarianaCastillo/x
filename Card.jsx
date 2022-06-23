import { useEffect, useState } from 'react';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardArrows } from './CardArrows';


export const Card = ({ users, newUser }) => {
	const [actual, setActual] = useState(0);
	const [textos, setTextos] = useState({});


	const previo = () => {
		setActual(actual - 1);
		if (actual === 0) {
			setActual(0);
		}
	};

	
	const siguiente = () => {
		setActual(actual + 1);
		if (actual === users.length - 5) {
			newUser();
			console.log(users);
		}
	};

	useEffect(() => {
		cambiaTextos('user');
	}, [actual]);
	const cambiaTextos = (icono) => {
		switch (icono) {
			case 'user':
				setTextos({
					parrafo: 'Hola, mi nombre es',
					main: `${users[actual].name.first} ${users[actual].name.last}`,
					icono: 'user',
				});
				break;
			case 'email':
				setTextos({
					parrafo: 'Mi correo:',
					main: `${users[actual].email}`,
					icono: 'email',
				});
				break;
			case 'birthday':
				setTextos({
					parrafo: 'Mi fecha de nacimiento:',
					main: `${users[actual].dob.date.slice(
						8,
						10
					)}/${users[actual].dob.date.slice(5, 7)}/${users[
						actual
					].dob.date.slice(0, 4)}`,
					icono: 'birthday',
				});
				break;
			case 'address':
				setTextos({
					parrafo: 'Mi dirección:',
					main: `${users[actual].location.street.number} ${users[actual].location.street.name}`,
					icono: 'address',
				});
				break;
			case 'phone':
				setTextos({
					parrafo: 'Mi número telefónico:',
					main: `${users[actual].phone}`,
					icono: 'phone',
				});
				break;
			case 'username':
				setTextos({
					parrafo: 'Mi usuario:',
					main: `${users[actual].login.username}`,
					icono: 'username',
				});
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div className='card'>
				<CardHeader user={users[actual]} />
				<CardBody textos={textos} />
				<CardFooter
					user={users[actual]}
					cambiaTextos={cambiaTextos}
					textos={textos}
				/>
				<CardArrows
					users={users}
					actual={actual}
					previo={previo}
					siguiente={siguiente}
				/>
			</div>
		</>
	);
};
