# AI Agent Instructions for jdprintop.github.io

## Project Overview
This is a performance dashboard web application for tracking and displaying store performance metrics in a sales competition. The project uses vanilla JavaScript and HTML/CSS, with data stored in a static JavaScript file.

## Key Components

### Data Structure (`competition-data.js`)
- Stores competition data in `competitionData` array
- Each store record contains:
  - Basic info: `storeName`, `group`, `region`
  - Performance metrics: `amountScore`, `customerScore`, `新客業績`, `舊客業績`
  - Rankings: `金額排名`, `客戶數排名`
  - Thresholds: `amountThreshold`, `customerThreshold`
  - Targets: `自我宣告目標`

### UI Components (`index.html`)
1. Main Tab Navigation
   - Amount-based view
   - Customer-based view
   - Regional analysis

2. Data Display Tables
   - Sortable columns (implemented in `sortTable` function)
   - Group-based styling (A/B/C groups)
   - Performance indicators (medals for top performers)

## Project Conventions

### Data Formatting
- Use `formatNumber` for numerical values
- Percentages should include % symbol (e.g., `中和比例: "100%"`)
- Qualification status uses "YES"/"NO" strings

### UI Patterns
- Classes use kebab-case (e.g., `number-cell`, `self-declared-rate`)
- Performance status shown through CSS classes:
  - `qualified` for threshold achievements
  - `rank-1`, `rank-2`, `rank-3` for top performers
  - `no-performance` for zero performance

### State Management
- Global state variables track current view:
  - `currentMainTab`
  - `currentGroupTab`
  - `currentSort.field`
  - `currentSort.direction`

## Common Operations

### Adding New Columns
1. Add column header in appropriate table section
2. Update `populateRegionTableWithData`/`populateGroupTableWithData` with new cell
3. Add sorting logic in `sortTable` function if sortable

### Data Updates
1. Update `competition-data.js` with new store records
2. Maintain consistent data structure with existing records
3. Ensure all required fields are present

## Development Workflow
- This is a static site - no build process required
- Test in browser by opening `index.html`
- Deploy by pushing to main branch (GitHub Pages)
