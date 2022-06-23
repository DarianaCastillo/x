export const CardFooter = ({ cambiaTextos, textos }) => {
	const clase = (e) => {
		document
			.querySelectorAll('li > img')
			.forEach((icono) => (icono.className = ''));
		e.target.className = 'active';
		cambiaTextos(e.target.name);
	};

	return (
		<div className='card-footer'>
			<ul>
				<li>
					<img
						name='user'
						src=""
						alt=''
						onMouseEnter={clase}
						className={
							textos.icono === 'user' ? 'active' : ''
						}
						id="userimg"
					/>
				</li>
				<li>
					<img
						name='email'
						src=""
						alt=''
						onMouseEnter={clase}
						className={
							textos.icono === 'email' ? 'active' : ''
						}
						id="emailimg"
					/>
				</li>
				<li>
					<img
						name='birthday'
						src=""
						alt=''
						onMouseEnter={clase}
						className={
							textos.icono === 'birthday' ? 'active' : ''
						}
						id="fechaimg"
					/>
				</li>
				<li>
					<img
						name='address'
						src=""
						alt=''
						onMouseEnter={clase}
						className={
							textos.icono === 'address' ? 'active' : ''
						}
						id="addresimg"
					/>
				</li>
				<li>
					<img
						name='phone'
						src=""
						alt=''
						onMouseEnter={clase}
						className={
							textos.icono === 'phone' ? 'active' : ''
						}
						id="phomeimg"
					/>
				</li>
				<li>
					<img
						name='username'
						src=""
						alt=''
						onMouseEnter={clase}
						className={
							textos.icono === 'username' ? 'active' : ''
						}
						id="passimg"
					/>
				</li>
			</ul>
		</div>
	);
};
