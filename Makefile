install:
	cd preliminaries && npm install -d && cd ..
	cd preliminaries && npm link
	cd preliminaries-parser-toml && npm link preliminaries
	cd preliminaries-parser-toml && npm install -d && cd ..

lint:
	cd preliminaries && npm run lint && cd ..
	cd preliminaries-parser-toml && npm run lint && cd ..

test:
	cd preliminaries && npm test && cd ..
	cd preliminaries-parser-toml && npm test && cd ..

publish:
	cd preliminaries && npm publish && cd ..
	cd preliminaries-parser-toml && npm publish && cd ..

all: install test

.PHONY: install lint test publish all