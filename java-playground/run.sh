#!/bin/bash

MAIN_CLASS="Example"
DELAY=1

echo "Watching *.java files for changes..."

# Capture initial file timestamps
touch .file_times.tmp
for file in *.java; do
  echo "$file $(stat -f %m "$file")" >> .file_times.tmp
done

while true; do
  sleep "$DELAY"
  CHANGED=false

  for file in *.java; do
    [[ -f "$file" ]] || continue
    NEW_TIME=$(stat -f %m "$file")
    OLD_TIME=$(grep "^$file " .file_times.tmp | awk '{print $2}')
    if [[ "$NEW_TIME" != "$OLD_TIME" ]]; then
      CHANGED=true
      sed -i '' "/^$file /d" .file_times.tmp
      echo "$file $NEW_TIME" >> .file_times.tmp
    fi
  done

  if $CHANGED; then
    clear
    echo "Change detected. Compiling..."
    if javac *.java; then
      echo "Compilation successful. Running $MAIN_CLASS..."
      echo "=============================="
      java "$MAIN_CLASS"
      echo "=============================="
    else
      echo "Compilation failed."
    fi
    echo "Watching for changes..."
  fi
done
