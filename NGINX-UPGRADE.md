# NGINX 1.31.9 runtime upgrade

The regular Dockerfile pins/builds NGINX 1.31.9 for future full application builds.
For an NGINX-only deployment, use the dedicated runtime Dockerfile with
`APP_IMAGE` set to the verified deployed local image tag. Build in a clean
checkout; record the original image ID, source commit and candidate image ID.
The original application code, assets and config stay in the image; licensed
or credential-bearing runtime files must not be copied into Git/build context.

Validate the candidate against the live NGINX config before changing the
Ansible-managed image reference. Keep the previous image for rollback, recreate
only the selected Compose service with `--no-deps`, then check its version,
configuration, HTTP/API behavior and persistent mounts.
