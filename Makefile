install: 
	npm ci
start:
	node bin/brain-games.js
even:
	npx babel-node -- src/bin/brain-even.js
lint:
	npx eslint .
publish:
	npm publish --dry-run