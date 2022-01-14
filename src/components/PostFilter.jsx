import React from 'react'
import Input from './UI/Inputs/Input';
import Select from './UI/Select/Select';

const PostFilter = ({filter, setFilter, limit, setLimit, setCurrentPages }) => {

	const changeLimit = (limit) => {
		setLimit(limit)
		setCurrentPages(1)
	}

	return (
		<>
			<div className="block-search">
				<Input
					onChange={e => setFilter({...filter, query: e.target.value})}
					value={filter.query}
					placeholder="Search..."
					type="text"
				/>
			</div>
			<div className="block-sort">
				<Select 
					value={filter.sort}
					onChange={selectedValue => setFilter({...filter, sort: selectedValue})}
					defaultValue="Sort by:"
					options={[
						{value: "title", name: "by name"},
						{value: "body", name: "by body"}
					]}
				/>
				<Select 
					value={limit}
					onChange={selectedValue => changeLimit(selectedValue)}
					defaultValue="Show by:"
					options={[
						{value: "5", name: "5"},
						{value: "10", name: "10"},
						{value: "25", name: "25"},
						{value: "50", name: "50"},
						{value: "-1", name: "All"}
					]}
				/>
			</div>
		</>
);
}

export default PostFilter;