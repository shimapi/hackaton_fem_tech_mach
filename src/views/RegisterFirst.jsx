const RegisterFirst = () => {
	return (
		<main className="register">
			<section className="register_first">
				<form>
					<input
						type="text"
						className="register_name"
						placeholder="Ingresa tu nombre"
					/>
					<input
						type="text"
						className="register_lastname"
						placeholder="Ingresa tu apellido"
					/>
				</form>
			</section>
		</main>
	);
};

export default RegisterFirst;
