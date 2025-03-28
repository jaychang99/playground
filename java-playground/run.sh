#!/bin/bash

FILE="Example.java"
CLASS="Example"

echo "Watching $FILE for changes..."

# Get initial modified time
LAST_MODIFIED=$(stat -f %m "$FILE")

while true; do
  sleep 1
  NEW_MODIFIED=$(stat -f %m "$FILE")
  
  if [[ "$NEW_MODIFIED" != "$LAST_MODIFIED" ]]; then
    clear
    echo "Detected change in $FILE"
    echo "Compiling..."
    if javac "$FILE"; then
      echo "Compilation successful. Running $CLASS..."
      echo "=============================="
      java "$CLASS"
      echo "=============================="
    else
      echo "Compilation failed."
    fi
    LAST_MODIFIED=$NEW_MODIFIED
    echo "Waiting for changes..."
  fi
done
