#!/bin/bash

set -e

BASE_DIR="./src"
OUTPUT_FILE="$BASE_DIR/index.ts"

echo "// 🌐 Entrypoint global du module todo-usecase" > "$OUTPUT_FILE"
echo "// Ce fichier est généré automatiquement. Ne pas modifier à la main." >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Parcourt chaque sous-dossier direct de src (ex: todo-retrieval, todo-creation)
find "$BASE_DIR" -mindepth 1 -maxdepth 1 -type d | sort | while read -r feature_dir; do
  feature_name=$(basename "$feature_dir")
  echo "// 📦 $feature_name" >> "$OUTPUT_FILE"

  # Récupère tous les fichiers .ts sauf index.ts et .d.ts
  find "$feature_dir" -type f -name "*.ts" \
    ! -name "index.ts" \
    ! -name "*.d.ts" | sort | while read -r file; do
      # Transforme le chemin absolu en chemin relatif sans extension .ts, mais avec .js
      rel_path="${file%.ts}"
      rel_path="${rel_path#./src/}"     # enlève le préfixe ./src/
      echo "export * from './$rel_path.js';" >> "$OUTPUT_FILE"
  done

  echo "" >> "$OUTPUT_FILE"
done

echo "✅ Fichier src/index.ts généré avec succès."