import * as app from './App.svelte';
import * as errorPage from './Error.svelte';
import entryQuery from '@/queries/entry.graphql';
import globalQuery from '@/queries/global.graphql';
import { main, mainError } from 'crelte/server';

export async function render(serverData) {
	return await main({
		app,
		entryQuery,
		globalQuery,
		serverData,
	});
}

export async function renderError(error, serverData) {
	return await mainError({
		error,
		errorPage,
		serverData,
	});
}
