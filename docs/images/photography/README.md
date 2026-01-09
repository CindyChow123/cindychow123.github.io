# Photography Folder Structure

This folder contains travel photos organized by location and date.

## Folder Naming Convention

Create folders using this format:
```
YYYY-MM_Location-Name
```

### Examples
- `2025-12_Sedona-Arizona`
- `2024-08_Yosemite-California`
- `2023-07_Tokyo-Japan`
- `2023-03_New-York-City`

### Rules
- Use `-` (hyphen) for spaces within location names
- Use `_` (underscore) to separate parts
- Year and month determine the timeline order (newest first)

## Adding a New Trip

1. Create a folder with the naming convention above
2. Add your photos (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`)
3. (Optional) Add an `info.txt` file with a custom description
4. Run the scan command:
   ```bash
   npm run scan-photos
   ```

## Optional: Custom Description

Add a file named `info.txt` inside your folder with a single line description:
```
Red rock formations and desert landscapes
```

If no `info.txt` is provided, it defaults to "Photos from [Location]".

## Commands

```bash
# Regenerate photo data after adding new folders
npm run scan-photos

# Preview the website locally
npm run dev

# Build for production (auto-runs scan-photos)
npm run build
```

## Example Structure

```
photography/
├── README.md
├── 2025-12_Sedona-Arizona/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── info.txt
├── 2024-08_Yosemite-California/
│   ├── half-dome.jpg
│   ├── valley-view.jpg
│   └── info.txt
└── 2023-07_Tokyo-Japan/
    ├── shibuya.jpg
    ├── temple.jpg
    └── info.txt
```
