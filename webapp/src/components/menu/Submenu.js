import React from 'react';
import styled from 'styled-components';

const Submenu = ({ menu }) => {
	const SectionContainer = styled.div`
		background-color: red;
		margin: 0;
		padding: 0;
	`
	return (
		<SectionContainer>
			<h2>{menu.labels.displayName}</h2>
			<p>{menu.labels.description}</p>
			{menu.items.map(i => {
				return (
					<div key={i.itemId}>
						<h5>{i.labels.displayName}</h5>
						<h5>{i.labels.description}</h5>
					</div>
				);
			})}
		</SectionContainer>
	)
};

export default Submenu;
