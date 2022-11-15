const Table = ({ headers, tbody }) => {
	return (
		<table>
			<thead>
				<tr>
					{headers?.map((data, i) => (
						<th key={i}>{data}</th>
					))}
				</tr>
			</thead>
			{tbody}
		</table>
	);
};

export default Table;
