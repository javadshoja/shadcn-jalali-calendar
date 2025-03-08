# Jalali Calendar Components Registry

A custom registry for Jalali (Persian) calendar components using shadcn/ui. This registry provides three main components:

- **JalaliCalendar**: A Persian/Jalali calendar component based on react-day-picker
- **JalaliDatePicker**: A Persian/Jalali date picker component with popover
- **JalaliDatePickerWithRange**: A Persian/Jalali date range picker component with popover

## Important Dependency Note

This registry requires the latest version of `react-day-picker`. Please ensure you have the latest version installed:

```bash
# Using npm
npm install react-day-picker@latest date-fns-jalali

# Using yarn
yarn add react-day-picker@latest date-fns-jalali

# Using pnpm
pnpm add react-day-picker@latest date-fns-jalali
```

## Getting Started

This is a custom registry using Next.js and shadcn/ui.

- The registry uses a `registry.json` file to define components and their files.
- The `shadcn build` command is used to build the registry.
- The registry items are served as static files under `public/r/[name].json`.
- Every registry item is compatible with the `shadcn` CLI.

## Usage

You can install these components using the shadcn CLI:

```bash
# Install jalali-calendar component
npx shadcn-ui@latest add https://github.com/javadshoja/shadcn-jalali-calender/r/jalali-calendar.json

# Install jalali-date-picker component
npx shadcn-ui@latest add https://github.com/javadshoja/shadcn-jalali-calender/r/jalali-date-picker.json

# Install jalali-date-picker-with-range component
npx shadcn-ui@latest add https://github.com/javadshoja/shadcn-jalali-calender/r/jalali-date-picker-with-range.json
```

## Component Dependencies

These components depend on the following:

1. `react-day-picker` (latest version)
2. `date-fns-jalali`
3. shadcn/ui button component
4. shadcn/ui popover component (for date pickers)

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation on creating and using registries.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
