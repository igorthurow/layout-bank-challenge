import React from 'react'
import PropTypes from 'prop-types'

import './grid-float-row.scss'

export const GridFloatRow = ({ amount: { prefix, value }, date }) => (
	<tr className='grid-float-row'>
		<th className='grid-float-row__date'>{date}</th>
		<th className='grid-float-row__value'>
			<span>{prefix}</span>{' '}
			<span className='grid-float-row__amount'>{value}</span>
		</th>
	</tr>
)

GridFloatRow.propTypes = {
	amountTotal: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired
}