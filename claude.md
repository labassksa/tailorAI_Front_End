# Project Guidelines

## Design Principles

### Responsive Design
All components and sections should be responsive and compatible with different screen sizes:

- **Mobile First**: Design should work seamlessly on mobile devices (320px and up)
- **Tablet**: Optimize layouts for tablet devices (768px and up)
- **Desktop**: Enhanced layouts for desktop screens (1024px and up)
- **Large Screens**: Full experience on large displays (1280px and up)

### Screen Size Breakpoints
Follow Tailwind CSS breakpoints:
- `sm:` - 640px and up (small tablets)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)
- `2xl:` - 1536px and up (extra large screens)

### Responsive Requirements
- All text should scale appropriately across screen sizes
- Images should be optimized and responsive
- Navigation should be accessible on mobile (consider hamburger menu if needed)
- Touch targets should be at least 44px on mobile devices
- Horizontal scrolling should be avoided
- Grid layouts should adapt from single column (mobile) to multi-column (desktop)
- Spacing and padding should scale with screen size
- Test on multiple devices and screen orientations

### RTL Support
- Design should support both LTR (English) and RTL (Arabic) layouts
- Ensure proper text alignment and direction switching
- Icons and UI elements should mirror correctly in RTL mode
