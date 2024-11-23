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

try-myendpoint:
	curl -i http://localhost:8055/myendpoint/