import React from 'react'

const Select = ({options, defaultValue, value, onChange}) => {
	return (
      <select className="select" value={value} onChange={e => onChange(e.target.value)}>
			<option disabled value="">{defaultValue}</option>
			{options.map(options => 
				<option key={options.value} value={options.value}>{options.name}</option>
			)}
		</select>
);
}

export default Select;