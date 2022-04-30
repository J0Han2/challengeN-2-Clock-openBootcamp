import { useEffect, useState } from 'react'

function Clock() {
	const [personInfo, setPersonInfo] = useState({
		date: new Date(),
		age: 0,
		firstName: 'Pablo',
		lastName: 'Casas',
	})

	const tick = () =>
		setPersonInfo(prev => ({ ...prev, date: new Date(), age: prev.age + 1 }))

	useEffect(() => {
		const timerID = setInterval(tick, 1000)

		return () => {
			clearInterval(timerID)
		}
	})

	return (
		<ul>
			<li>
				<span>Current hour:</span> {personInfo.date.toLocaleTimeString()}
			</li>
			<li>
				<span>Age:</span> {personInfo.age}
			</li>
			<li>
				<span>Full name:</span> {personInfo.firstName} {personInfo.lastName}
			</li>
		</ul>
	)
}

export default Clock
