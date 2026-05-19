import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const previewDir = path.join(root, "client-preview");

if (!fs.existsSync(outDir)) {
  throw new Error("The out directory does not exist. Run npm run build first.");
}

if (fs.existsSync(previewDir)) {
  fs.rmSync(previewDir, { recursive: true, force: true });
}

fs.cpSync(outDir, previewDir, { recursive: true });

fs.writeFileSync(
  path.join(previewDir, "START-PREVIEW.bat"),
  `@echo off\r\necho جاري تشغيل المعاينة...\r\ncd /d "%~dp0"\r\nnpx serve . -p 3000\r\nstart http://localhost:3000\r\npause\r\n`,
  "utf8"
);

fs.writeFileSync(
  path.join(previewDir, "START-PREVIEW.sh"),
  `#!/usr/bin/env sh\nprintf '%s\\n' 'جاري تشغيل المعاينة...'\ncd "$(dirname "$0")" || exit 1\nnpx serve . -p 3000\n`,
  "utf8"
);

fs.writeFileSync(
  path.join(previewDir, "README-CLIENT.txt"),
  `كيفية مشاهدة الموقع بدون إنترنت:\r\n1. انقر مرتين على ملف START-PREVIEW.bat\r\n2. سيفتح المتصفح تلقائيًا\r\n3. استعرض الموقع كاملًا\r\n4. لإيقاف التشغيل: اغلق النافذة السوداء\r\n`,
  "utf8"
);

console.log("client-preview package folder created.");
