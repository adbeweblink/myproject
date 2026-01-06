const fs = require('fs');
const path = require('path');

/**
 * Weblink Adobe FY26 Blueprint - Project Packager
 * 指令: node package.js
 * 作用: 將整個專案原始碼打包成一個 XML 檔案，便於 AI 閱讀與存檔。
 */

const OUTPUT_FILE = 'project_bundle.xml';
const IGNORE_LIST = [
  'node_modules',
  '.git',
  'package-lock.json',
  OUTPUT_FILE,
  'package.js',
  '.DS_Store'
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.relative(process.cwd(), fullPath);

    // 檢查是否在忽略清單中
    if (IGNORE_LIST.some(ignore => relativePath.startsWith(ignore) || file === ignore)) {
      return;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(relativePath);
    }
  });

  return arrayOfFiles;
}

function packageProject() {
  console.log('🚀 正在啟動專案打包程序...');
  
  const files = getAllFiles('.');
  let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xmlContent += '<project name="Weblink Adobe FY26 Ecosystem Strategic Blueprint">\n';
  xmlContent += '  <metadata>\n';
  xmlContent += '    <generated_at>' + new Date().toISOString() + '</generated_at>\n';
  xmlContent += '    <description>此文件包含 Weblink Adobe FY26 戰略藍圖之完整原始碼</description>\n';
  xmlContent += '  </metadata>\n';

  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      xmlContent += `  <file path="${filePath}">\n`;
      xmlContent += `    <content><![CDATA[${content}]]></content>\n`;
      xmlContent += `  </file>\n`;
      console.log(`✅ 已加入: ${filePath}`);
    } catch (err) {
      console.error(`❌ 讀取失敗 ${filePath}: ${err.message}`);
    }
  });

  xmlContent += '</project>';

  try {
    fs.writeFileSync(OUTPUT_FILE, xmlContent);
    console.log('\n--------------------------------------------------');
    console.log(`🎉 打包完成！`);
    console.log(`📁 輸出檔案：${OUTPUT_FILE}`);
    console.log(`📄 總計檔案數：${files.length}`);
    console.log('--------------------------------------------------');
  } catch (err) {
    console.error(`❌ 寫入 XML 失敗: ${err.message}`);
  }
}

packageProject();
