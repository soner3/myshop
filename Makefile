build:
	docker build -t shopzilla .

run:
	docker run --rm -p 3000:3000 shopzilla