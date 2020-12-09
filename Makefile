.PHONY: all
all: format

.PHONY: format
format:
	prettier --write *.js
