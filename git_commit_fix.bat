@echo off
cd /d C:\Users\adity\Downloads\projects\new_portfolio_aditya\portfolio\client
echo --- git status ---
git status --porcelain
echo --- git add ---
git add src/components/Projects.js src/components/Contact.js src/components/Skills.css src/components/Certifications.css
echo --- git commit ---
git commit -m "Fix ESLint: remove BOM, unused import; responsive Skills CSS; responsive Certifications heading"  || echo No changes to commit
echo --- done ---
