apm link --dev
apm unlink

# atom -d just opens up Atom in development mode. Meaning all packages in ~/.atom/dev/packages/ will be loaded.
atom --dev .

atom.config.unset(`uuu-ui`);

atom.config.unset(`uuu-syntax`);
