#!/bin/bash

MAIN_CLASS="Example"
DELAY=1

echo "Recursively watching for *.java changes..."
echo "Main class: $MAIN_CLASS"

# Function to list all *.java files with their modification times
list_java_files_with_mtime() {
  find . -name "*.java" -exec stat -f "%N %m" {} \; | sort
}

# Store initial state
last_snapshot=$(list_java_files_with_mtime)

while true; do
  sleep "$DELAY"
  current_snapshot=$(list_java_files_with_mtime)

  if [[ "$current_snapshot" != "$last_snapshot" ]]; then
    clear
    echo "Change detected. Compiling..."
    if javac $(find . -name "*.java"); then
      echo "Compilation successful. Running $MAIN_CLASS..."
      echo "=============================="
      java "$MAIN_CLASS"
      echo "=============================="
    else
      echo "Compilation failed."
    fi
    last_snapshot="$current_snapshot"
    echo "Watching for changes..."
  fi
done
