import { useState, useEffect } from 'react';
import { checkCellGroups, checkColumns, checkRows } from './Checks'
import './App.css';

const initialBoard = {
	cellGroups: [
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
		{
			cells: [
				'','','',
				'','','',
				'','',''
			]
		},
	]
}

function App() {

	const [board, setBoard] = useState(initialBoard)
	const [key, setKey] = useState(0)
	const [errors, setErrors] = useState([])

	useEffect(() => {
		let errors = checkCellGroups(board)
		errors = errors.concat(checkRows(board))
		errors = errors.concat(checkColumns(board))

		let formatedErrors = []

		errors.forEach(error => {
			formatedErrors.push(`${error.cellGroupIndex}-${error.cellIndex}`)
		})

		setErrors(formatedErrors)
		
	}, [key])

	const handleChange = (e) => {
		let coordinates = e.target.id.split('-')
		let cellGroupIndex = coordinates[0]
		let cellIndex = coordinates[1]

		let newValue = e.target.value.replace(board.cellGroups[cellGroupIndex].cells[cellIndex], '')

		if (/[^\d]/.test(newValue)) {
			return
		}

		let newBoard = board

		newBoard.cellGroups[cellGroupIndex].cells[cellIndex] = newValue
		setBoard(newBoard)

		setKey(Math.random()) // force update cells
	}
	
	return (
		<div className="App">
			<div className='board'>
				{ board.cellGroups.map((cellGroup, cellGroupIndex) => (
					<div className='cell-group'>
						{ cellGroup.cells.map((cell, cellIndex) => (
							<div className='cell'>
								<input
									className={ errors.indexOf(`${cellGroupIndex}-${cellIndex}`) === -1 ? 'black' : 'red'}
									key={ key }
									value={ cell }
									onChange={ handleChange }
									id={`${cellGroupIndex}-${cellIndex}`}/>
							</div>
						)) }
					</div>
				)) }
			</div>
		</div>
  	);
}

export default App;
