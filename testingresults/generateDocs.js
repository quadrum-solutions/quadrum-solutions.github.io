const fs = require('fs');
const path = require('path');

// Get file paths from command-line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Usage: node generateMarkdown.js <codeFilePath> <outputFilePath>');
    process.exit(1);
}

const [codeFilePath, outputFilePath] = args;

// Read the code file
const code = fs.readFileSync(codeFilePath, 'utf8');

// Extract the main description
const mainDescriptionMatch = code.match(/test\.describe\('(.+?)'/);
const mainDescription = mainDescriptionMatch ? mainDescriptionMatch[1] : 'Main Test Suite';

// Extract individual test case identifiers and descriptions
let testCases = [];
const testCaseRegex = /test\(`(TC\d+)\s*-\s*(.+?)`/g;
let match;

while ((match = testCaseRegex.exec(code)) !== null) {
    testCases.push({
        id: match[1],
        description: match[2]
    });
}

// Create Markdown content
let markdownContent = `# ${mainDescription}\n\n`;

testCases.forEach(({ id, description }) => {
    markdownContent += `### ${id} - ${description}\n[Click to watch the video](videos/${id.toLowerCase()}.webm)\n\n`;
});

// Write to the Markdown file
fs.writeFileSync(outputFilePath, markdownContent, 'utf8');
console.log(`Markdown file created at ${outputFilePath}`);
