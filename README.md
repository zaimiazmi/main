# Zai Mi Portfolio

## Maintenance Mode

This site is currently showing a maintenance message.

### Backup Files

The following backup files have been created:
- `index_backup.html` - Full portfolio site (original index.html)
- `style_backup.css` - Original styles
- `script_backup.js` - Original JavaScript

### How to Restore the Full Site

When ready to restore the full portfolio site, follow these steps:

1. Replace the maintenance message with the original site:
   ```bash
   cp index_backup.html index.html
   ```

2. Commit and push the changes:
   ```bash
   git add index.html
   git commit -m "Restore full site after maintenance"
   git push origin main
   ```

3. Wait 1-2 minutes for GitHub Pages to update, then visit:
   ```
   https://zaimiazmi.github.io/main/
   ```

### How to Return to Maintenance Mode

To show the maintenance message again:

1. Create a simple maintenance HTML file or use the current index.html as a template
2. Replace index.html with the maintenance version
3. Commit and push

The backup files will remain in the repository for easy restoration.