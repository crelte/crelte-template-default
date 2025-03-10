import * as app from './App.svelte';
import * as errorPage from './Error.svelte';
import entryQuery from '@/queries/entry.graphql';
import globalQuery from '@/queries/global.graphql';
import { main } from 'crelte/client';

main({
	app,
	errorPage,
	entryQuery,
	globalQuery,
});
