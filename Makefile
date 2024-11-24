up:
	docker compose up

build:
	make -j4 build-myendpoint build-myinterface build-myhook build-mybundle

build-myendpoint:
	(cd myendpoint && npm run build)

build-myinterface:
	(cd myinterface && npm run build)

build-myhook:
	(cd myhook && npm run build)

build-mybundle:
	(cd mybundle && npm run build)

build-myoperation:
	(cd myoperation && npm run build)

EXTENSION=directus-extension-myendpoint
try-myendpoint:
	curl -i http://localhost:8055/$(EXTENSION)/