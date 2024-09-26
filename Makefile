build:
	docker build -t myshop .

run:
	docker run --rm -p 3000:3000 myshop