up:
	docker compose up

build:
	cd myendpoint && npm run build

try-myendpoint:
	curl -i http://localhost:8055/myendpoint/