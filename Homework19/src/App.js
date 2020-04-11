import React from 'react';

import Header from './Components/Header/header';
import SearchInput from './Components/SearchInput/searchInput';
import Table from './Components/Table/table';

import { AppContext, EventContext } from './AppContexts';

export default function App() {
	const [searchText, setSearchText] = React.useState('');

	const handleSearchInputChange = (event) => {
		setSearchText(event.currentTarget.value);
	}

	const appContext = {
		searchText,
	}

	const eventContext = {
		onSearchInputChange: handleSearchInputChange,
	}

	return (
		<AppContext.Provider value={appContext}>
			<EventContext.Provider value={eventContext}>
				<div>
					<Header />
					<SearchInput />
					<Table />
				</div>
			</EventContext.Provider>
		</AppContext.Provider>
	);
}
