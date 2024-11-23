up:
	docker compose up

build:
	make -j3 build-myendpoint build-myinterface build-myhook

build-myendpoint:
	(cd myendpoint && npm run build)

build-myinterface:
	(cd myinterface && npm run build)

build-myhook:
	(cd myhook && npm run build)

try-myendpoint:
	curl -i http://localhost:8055/myendpoint/