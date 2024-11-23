up:
	docker compose up

build:
	for x in myendpoint myinterface myhook; do (cd $$x && npm run build); done

try-myendpoint:
	curl -i http://localhost:8055/myendpoint/