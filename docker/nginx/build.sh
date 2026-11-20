#!/bin/sh
set -eu
umask 022
mkdir -p /build /out/usr/sbin /out/usr/lib/nginx/modules /out/usr/share/lua/5.1 /out/etc/nginx/modules-enabled
cd /build
fetch() {
    name=$1; url=$2; sha=$3
    curl --fail --show-error --location --retry 3 "$url" -o "$name.tar.gz"
    echo "$sha  $name.tar.gz" | sha256sum -c -
    mkdir "$name"; tar -xzf "$name.tar.gz" --strip-components=1 -C "$name"
}
fetch nginx https://nginx.org/download/nginx-1.31.9.tar.gz a11c5eeee2e257f4478f0e649f84b0040787d277d2d3e5233952aa6b6dcb80ad
fetch ndk https://codeload.github.com/vision5/ngx_devel_kit/tar.gz/bd44d16302273052d6005d7bdb55f74e23813de3 31963f6eb21c11991bd7b301bed0939570093f45c95ab947e4ac54da5855d4fd
fetch lua https://codeload.github.com/openresty/lua-nginx-module/tar.gz/4b21d8f5fd3cc94fd25c530b3a61405af9666d0b 2be9995ab63e96675a3281349472412e600c4c2ccb82fd34b74ee7e0c80bc68a
fetch core https://codeload.github.com/openresty/lua-resty-core/tar.gz/cb7264da6d94c259c4ad01ee5c61b5f65e3c7eb4 c19b44370ec9e929fffc3998010da9572ef8e9c3fffecdd24c9463c0f8106f77
fetch lrucache https://codeload.github.com/openresty/lua-resty-lrucache/tar.gz/3ff6300e68b73ba20e909c7d16bd839aef2e5a4b 1d85056a5737cfb4a479b8743d7765af11ee59c248d710b0b02a308da3882277
export LUAJIT_LIB=/usr/lib/x86_64-linux-gnu
export LUAJIT_INC=/usr/include/luajit-2.1
cd /build/nginx
./configure --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx \
 --conf-path=/etc/nginx/nginx.conf --modules-path=/usr/lib/nginx/modules \
 --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log \
 --pid-path=/run/nginx.pid --lock-path=/var/lock/nginx.lock \
 --http-client-body-temp-path=/var/lib/nginx/body --http-proxy-temp-path=/var/lib/nginx/proxy \
 --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi \
 --http-scgi-temp-path=/var/lib/nginx/scgi --user=www-data --group=www-data \
 --with-compat --with-threads --with-debug --without-pcre2 --with-pcre-jit \
 --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module \
 --with-http_auth_request_module --with-http_v2_module --with-http_dav_module \
 --with-http_slice_module --with-http_addition_module --with-http_gunzip_module \
 --with-http_gzip_static_module --with-http_sub_module \
 --with-http_geoip_module=dynamic --with-http_image_filter_module=dynamic \
 --with-http_xslt_module=dynamic --with-mail=dynamic --with-mail_ssl_module \
 --with-stream=dynamic --with-stream_ssl_module --with-stream_geoip_module=dynamic \
 --add-dynamic-module=/build/ndk --add-dynamic-module=/build/lua \
 --with-cc-opt='-O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC' \
 --with-ld-opt='-Wl,-z,relro -Wl,-z,now'
make -j2
cp objs/nginx /out/usr/sbin/nginx
cp objs/*.so /out/usr/lib/nginx/modules/
cp -R /build/core/lib/resty /out/usr/share/lua/5.1/
cp -R /build/lrucache/lib/resty/* /out/usr/share/lua/5.1/resty/
for spec in '10:ndk_http_module' '50:ngx_http_geoip_module' '50:ngx_http_image_filter_module' '50:ngx_http_lua_module' '50:ngx_http_xslt_filter_module' '50:ngx_mail_module' '50:ngx_stream_module' '70:ngx_stream_geoip_module'; do
 order=${spec%%:*}; module=${spec#*:}
 printf 'load_module modules/%s.so;\n' "$module" > "/out/etc/nginx/modules-enabled/$order-$module.conf"
done
