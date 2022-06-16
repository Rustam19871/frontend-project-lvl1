install: 
	npm ci
start:
	node bin/brain-games.js
start:
	node bin/brain-even.js
lint:
	npx eslint .
publish:
	npm publish --dry-run