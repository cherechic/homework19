import React from 'react';

import { AppContext, EventContext } from '../../AppContexts';

export default function SearchInput() {
	const appContext = React.useContext(AppContext);
	const eventContext = React.useContext(EventContext);

	return (
		<input
			value={appContext.searchText}
			onChange={eventContext.onSearchInputChange}
		/>
	)
}
