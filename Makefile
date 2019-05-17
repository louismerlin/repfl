build:
	docker build -t repfl .
start:
	docker run -it -v "${PWD}/src:/app/src" -p 3000:3000 -p 1234:1234 repfl yarn start
sh:
	docker run -it -v "${PWD}/src:/app/src" repfl sh
lint:
	docker run -it -v "${PWD}/src:/app/src" repfl yarn lint