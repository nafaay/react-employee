import {useState} from "react";
const Employee = ({name, role, salary}) => {
	const [roleEmployee, setRoleEmployee] = useState("Software Developer");
	const handleRole = () => {
		roleEmployee === "Software Developer"
			? setRoleEmployee("Java Developer")
			: setRoleEmployee("Software Developer");
	};

	const handleChangeRole = e => {
		console.log(e.target.value);
		setRoleEmployee(e.target.value);
	};
	return (
		<>
			<input onChange={handleChangeRole} />
			<button onClick={handleRole}>Change Role</button>
			<h2>Employee</h2>
			<p>Name: {name}</p>
			<p>Function: {roleEmployee} </p>
			<p>Salary: {salary}</p>
		</>
	);
};

export default Employee;
