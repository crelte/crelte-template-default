## Crelte project

This is a crelte project, if you want to know more about crelte
check out the [documenation](https://github.com/crelte/crelte/tree/main/docs).

# Local Development
Once you have cloned the repository you can start the project with the following commands:

## CMS

```bash
# start ddev
cd craft
ddev start
ddev composer install
ddev import-db --file=dump.sql.gz
# copy assets
```

## Svelte

```bash
cd svelte
npm install
npm run dev
# open localhost:8080
```
