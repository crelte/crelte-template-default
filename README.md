# Crelte project

This is a crelte project, if you want to know more about crelte
check out the [documentation](https://docs.crelte.com/).

## Local Development

Everything (Craft CMS and the Svelte dev server) runs inside [DDEV](https://ddev.com),
so you don't need PHP or Node.js on your machine.

Once you have cloned the repository you can start the project with the following commands:

### CMS

```bash
# start ddev (from the project root)
ddev start
ddev composer install
ddev import-db --file=dump.sql.gz
# copy assets
```

### Svelte

```bash
ddev sv npm install
ddev sv npm run dev
# then run `ddev launch` or open https://<project>.ddev.site
```

> [!TIP]
> `ddev sv <command>` runs any command in the `svelte/` directory inside the
> web container. Alternatively DDEV's built-in `ddev npm` works as well if you
> run it from within the `svelte/` directory.

## URLs

- **Frontend**: `https://<project>.ddev.site`
- **Craft control panel**: `https://admin.<project>.ddev.site/admin`

If you want to change these, update `name` and `additional_hostnames` in
`.ddev/config.yaml`, the `server_name` directives in
`.ddev/nginx_full/svelte-site.conf` and `.ddev/nginx_full/admin-site.conf`,
and the URLs in `craft/.env`.
