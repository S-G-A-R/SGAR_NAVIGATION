#!/bin/bash

    # Command 1
    npm install
    # Command 2 (only runs if npm install succeeds)
    node ./swagger.js
    # Command 3 (only runs if the previous commands succeed)
    npm run build